import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useProducto} from "../../hooks/useProducto.js";
import {useEffect, useState} from "react";
import {traerProductoById} from "../../service/ProductoService.js";
import {useAuth} from "../../auth/hooks/useAuth.js";


export const ComprarProducto =()=> {
    const { login } = useAuth();
    const {idCompra,idCategoria} = useParams();
    const {comprarProductoBackend, cargarFormulario,selecionarFormulario} = useProducto();

    const navigate = useNavigate();
    const [cantidad, setCantidad] = useState(0);

    const [producto, setProducto] = useState([])
    const [descripcion,setDescripcion] = useState(true);
    const [especificacion, setEspecificacion] = useState(false);
    const [actualizarModal, setActualizarModal] = useState(false);

    const cargarProducto = async ()=> {
        const result = await traerProductoById(idCompra);
        setProducto(result);

    }

    const aumentarCantidad=()=> {
        setCantidad(cantidad+1)
    }

    const disminuirCantidad=()=> {
        if(cantidad>0){

            setCantidad(cantidad-1)
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
                                                <button
                                                    onClick={disminuirCantidad}
                                                    className={"bg-amber-400 rounded-full w-7 h-7 text-center text-white text-md font-black "}> - </button>
                                                <p className={"mx-3"}>{cantidad}</p>
                                                <button
                                                    onClick={aumentarCantidad}
                                                    className={"bg-amber-400 rounded-full w-7 h-7 text-center text-white text-md font-black"}> + </button>
                                            </div>

                                            <div>
                                                <button className={"bg-amber-400 rounded-full text-md text-white  font-bold p-1"}> Comprar </button>
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

