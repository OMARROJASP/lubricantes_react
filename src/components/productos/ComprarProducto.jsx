import { useNavigate, useParams} from "react-router-dom";
import {useProducto} from "../../hooks/useProducto.js";
import {useEffect, useState} from "react";
import {traerProductoById} from "../../service/ProductoService.js";
import {useAuth} from "../../auth/hooks/useAuth.js";
import {useCarrito} from "../../hooks/useCarrito.js";
import { faXmark, faCirclePlus, faCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findAllDetalleByUsuarioByVentasService} from "../../service/CarritoService.js";
const arregloDetalle = {
    "id":0,
    "producto": 0,
    "cantidad": 1,
    "precioUnitario": 0,
    "subTotal": 0
}

export const ComprarProducto =()=> {

    const { login } = useAuth();
    const {idCompra,idCategoria} = useParams();
    const { cargarFormulario} = useProducto();

    const {cargarCarritoCompras,guardarCarritoCompra,updateCarritoVenta} = useCarrito();
    const navigate = useNavigate();
    const [listDetalle,setListDetalle]=useState([])
    const [cantidad, setCantidad] = useState(1);
    const [detalle, setDetalle] = useState(arregloDetalle)
    const [producto, setProducto] = useState([])
    const [descripcion,setDescripcion] = useState(true);
    const [especificacion, setEspecificacion] = useState(false);
    const [modal, setModal] = useState(true);

    const cargarProducto = async ()=> {
        const result = await traerProductoById(idCompra);
        setProducto(result);
        setDetalle({...detalle, producto: result.id, precioUnitario: result.precio})
    }
    const cambiarModal =()=> {
        setModal(!modal);
    }
    const aumentarCantidad=()=> {

            setCantidad(cantidad + 1)
            setDetalle({...detalle, cantidad: cantidad+1, subTotal: cantidad * producto.precio})

    }
    const disminuirCantidad=()=> {
        if(cantidad>1){
            setCantidad(cantidad-1)
            setDetalle({...detalle, cantidad: cantidad})
        }
    }
    const SelectionDescripcion =()=> {
        setDescripcion(!descripcion)
        setEspecificacion(!especificacion)
    }
    const SelectionEspecificacion=()=> {
        setEspecificacion(!especificacion)
        setDescripcion(!descripcion)
    }
    const ActualizarProducto =( product)=> {
        cargarFormulario(product)
        navigate(`/categorias/${idCategoria}/productos/${idCompra}/comprar/actualizar`)
    }
    const seguirComprando =async ()=> {

        if (login.user) {

            const detalles = await findAllDetalleByUsuarioByVentasService(login.user?.username);
            setListDetalle(detalles);
            console.log(detalles);
            console.log(listDetalle);

            const ubicadoProducto = detalles.some(d => d.producto === producto.id);
            console.log(ubicadoProducto);
            if (ubicadoProducto) {
                const detalleProducto = detalles.find(d => d.producto === producto.id);
                console.log(detalleProducto);
                if (detalleProducto) {
                    updateCarritoVenta(
                        detalleProducto,
                        detalleProducto.cantidad + cantidad,
                        (detalleProducto.cantidad + cantidad) * producto.precio)
                    console.log(detalleProducto.cantidad + cantidad)
                }
            } else {
                guardarCarritoCompra(detalle, login.user?.username)
            }
            cambiarModal()
            setDetalle(arregloDetalle)
        } else{
            alert("Debe de insertar ru cuenta para poder comprar")
        }




    }
    const comprar = async ()=> {


        if(cantidad>0) {
            if(login.user){
            const detalles = await findAllDetalleByUsuarioByVentasService(login.user?.username);
            setListDetalle(detalles);

            const ubicadoProducto = detalles.some(d => d.producto === producto.id);
            console.log(ubicadoProducto);
                if (ubicadoProducto) {
                    const detalleProducto = detalles.find(d => d.producto === producto.id);
                    if (detalleProducto) {
                        updateCarritoVenta(
                            detalleProducto,
                            detalleProducto.cantidad+cantidad,
                            detalleProducto.subTotal + cantidad*producto.precio)
                        cargarCarritoCompras(login.user?.username)
                        navigate(`/categorias/${idCategoria}/productos/${idCompra}/comprar/pagar`);
                    }
                } else {
                    guardarCarritoCompra(detalle, login.user?.username);
                    navigate(`/categorias/${idCategoria}/productos/${idCompra}/comprar/pagar`);
                }
            }else{
                alert("Debes insertar tus cuenta")
                navigate(`/login`)
            }
        }
        setDetalle(arregloDetalle)
    }

    useEffect(() => {
        cargarProducto()

    }, [idCompra]);

    return(
        <>

            <div className={"grid grid-rows-2 justify-center my-5"}>

                    <div className={" flex grid-cols-2 gap-2 "}>

                        <div className={"flex grid-cols-4 border-2 border-gray-400 rounded-xl  "}>
                           <div className={"flex grid-cols-4  m-2"}>
                               <div className={"col-span-3 py-2 "}>
                                   <img
                                       src={producto.imagen} width={"auto"}
                                       className={"w-64 h-64 transition-transform transform-gpu hover:scale-150"}
                                   />
                               </div>
                               <div>
                                   <div className={"border-2 border-gray-400 m-2 rounded-xl p-1"}>
                                       <img width={"90px"} src={producto.imagen}/>
                                   </div>
                                   <div className={"border-2 border-gray-400 m-2 rounded-xl p-1"}>
                                       <img width={"90px"} src={producto.imagen}/>
                                   </div>
                                   <div className={"border-2 border-gray-400 m-2 rounded-xl p-1"}>
                                       <img width={"90px"} src={producto.imagen}/>
                                   </div>
                               </div>
                           </div>
                        </div>





                        <div className="border-2 border-gray-400 rounded-xl p-1  justify-center flex">

                            <div className=" p-1 w-3/4">
                                <div>
                                    <p className={"underline font-bold text-amber-400 text-2xl"}>{producto.marca}</p>
                                    <p className={"text-xl"}>{producto.nombre}</p>
                                </div>
                                <div className=" flex text-gray-300  text-xl font-bold  text-center justify-between">
                                    <p>Precio Regular</p>
                                    <p>{producto.precio}</p>
                                </div>
                                <div className=" flex justify-between text-xl text-blue-400 font-bold text-center">
                                    <p>Pago con tarjeta</p>
                                    <p>{((producto.precio * 105) / 100).toFixed(2)}</p>
                                </div>
                                {producto.descuento > 0 && (
                                    <div className="flex justify-between  text-xl text-red-500 font-bold text-center">
                                        <p>Oferta</p>
                                        <p>{(producto.precio - (producto.precio * producto.descuento / 100)).toFixed(2)}</p>
                                    </div>
                                )}

                                {
                                    producto.cantidad > 0 && (
                                        <div className={"flex justify-around my-5"}>
                                            <div className={"flex justify-between"}>
                                                <FontAwesomeIcon onClick={disminuirCantidad} className={"h-7"} icon={faCircleMinus} style={{color: "#FFD43B",}} />
                                                <p className={"mx-3"}>{cantidad}</p>

                                                <FontAwesomeIcon onClick={aumentarCantidad} className={"h-7"} icon={faCirclePlus} style={{color: "#FFD43B",}} />
                                              </div>

                                            <div>
                                                <button onClick={cambiarModal} className={"bg-amber-400 rounded-full text-md text-white  font-bold p-1"}> Comprar </button>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    producto.cantidad > 0 ? (
                                        <div className="my-5 mx-6 text-green-500 text-center font-bold border-dashed border-2 border-green-500 text-center ">
                                            <p>Stock Disponible</p>
                                        </div>
                                    ):
                                        (
                                            <div className="my-5 mx-6 text-red-500 text-center font-bold border-dashed border-2 border-red-500 text-center ">
                                                <p>Stock No Disponible</p>
                                            </div>
                                        )
                                }



                                <div className={"m-2 mt-3.5 font-bold"}>
                                    <p>Te ofrecemos los siguientes metodos de pago</p>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZa9stluxuArfKQHtToXyOJoDSyNgmHsLOrA&s"}/>
                                </div>

                                {modal || (
                                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                                        <div className="bg-white rounded-xl p-4">
                                            <div className={"text-center"}>
                                                <div className={"flex justify-between items-center mx-3"}>
                                                    <p className="text-2xl text-green-600 font-bold">Producto añadido con éxito al carrito</p>
                                                    <FontAwesomeIcon onClick={cambiarModal} className={"h-8"} icon={faXmark} style={{color: "#e90c0c",}} />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">

                                                    <div className="flex items-center uppercase">
                                                        <img src={producto.imagen} className="w-24 h-auto" alt="Producto" />
                                                        <div className="ml-4">
                                                            <p className="text-xl">{producto.nombre} - {producto.marca}</p>
                                                            <p className="text-lg">S/. {cantidad*producto.precio} </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-end items-center ">
                                                        <button onClick={seguirComprando} className=" px-4 py-2 bg-green-500 text-white rounded-md mr-2">Seguir Comprando</button>
                                                        <button onClick={comprar} className="px-4 py-2 bg-amber-400 text-white rounded-md">Ir al carrito</button>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                )

                                }

                                {
                                    !login.isAdmin || (
                                        <div className="flex justify-around items-center">
                                            <div>
                                                <button
                                                    className="bg-green-600 text-white rounded-md m-2  p-2 text-sm"
                                                    onClick={()=>ActualizarProducto(producto)}
                                                >
                                                    Actualizar
                                                </button>
                                            </div>
                                            <div >
                                                <button
                                                    className="bg-red-600 text-white rounded-md m-2 p-2 text-sm"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>


                                        </div>
                                    )
                                }


                            </div>
                        </div>


                    </div>


                    <div className={"mt-2 ml-2  border-2 border-gray-400 rounded-xl"}>
                        <div className={"bg-gray-100  h-15"}>
                            <button
                                onClick={SelectionDescripcion}
                                className={descripcion ? "p-2 text-white bg-amber-400 rounded-t-lg": "p-2  rounded-t-lg"}

                            >Descripcion</button>
                            <button
                                className={especificacion ? "p-2 text-white bg-amber-400 rounded-t-lg": "p-2  rounded-t-lg"}
                                onClick={SelectionEspecificacion}
                            >Especificaciones</button>
                        </div>
                        <div>
                            { descripcion && (
                                <div>descricion del producto </div>
                            )}
                            {especificacion && (
                                <div>Especificaciones del producto</div>
                            )}
                        </div>

                    </div>


                </div>

        </>
    )
}

