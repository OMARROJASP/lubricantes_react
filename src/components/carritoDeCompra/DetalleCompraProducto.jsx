import {useEffect, useState} from "react";
import {useProducto} from "../../hooks/useProducto.js";
import { faTrash, faSquareCaretUp, faSquareCaretDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCarrito} from "../../hooks/useCarrito.js";

export const DetalleCompraProducto=({id,producto,cantidad,precioUnitario,subTotal,sumaTotalProductos,carrito}) => {
    const {updateCarritoVenta,eliminarCarritoCompra} = useCarrito();
    const {comprarProductoBackend} = useProducto()
    const [product, setProduct] = useState({});
    const [cant, setCant] = useState(cantidad);
    const [total, setTotal] = useState(subTotal);
    const cambiarCantidad =(numero)=> {
      if(cant + numero > 0 ){
          setCant(cant + numero);
          setTotal((cant+ numero)*precioUnitario)
          updateCarritoVenta(carrito,cant+ numero,total)
          sumaTotalProductos()
      }
    }

    const eliminarDetalleCompra =(id)=> {
        eliminarCarritoCompra(id)
    }

    useEffect(() => {
        const cargarProducto = async (id) => {
            const productoCargado = await comprarProductoBackend(id);
            console.log(productoCargado)
            setProduct(productoCargado);
        };
        cargarProducto(producto);
    }, [producto]);

    return(
        <>
            <div className={"grid grid-cols-5 bg-white border-4 m-4 rounded-xl p-2 "}>
                <div className={"col-span-2"}>
                    <p>Producto: {product.nombre}</p>
                    <p>Cantidad : {cant}</p>
                    <p>Precio Unitario : {precioUnitario}</p>
                    <p>Total : {total}</p>
                </div>

                <div className="flex justify-center items-center col-span-2 h-28">
                    <div className="w-24 h-24 overflow-hidden">
                        <img src={product.imagen} alt="Imagen del producto" className="w-full h-auto" />

                    </div>

                </div>
                <div>
                    <p className="relative">
                        <FontAwesomeIcon onClick={()=>eliminarDetalleCompra(id)} className="h-8 mx-3 transition-transform transform-gpu hover:-translate-y-1" icon={faTrash} style={{ color: "#FFD43B" }} />
                    </p>
                    <p >
                        <FontAwesomeIcon onClick={() => cambiarCantidad(1)} className="h-8 mx-3 hover:h-9"  icon={faSquareCaretUp} style={{ color: "#FFD43B" }} />
                    </p>
                    <p >
                        <FontAwesomeIcon onClick={() => cambiarCantidad(-1)} className="h-8 mx-3 hover:h-9"  icon={faSquareCaretDown} style={{ color: "#FFD43B" }} />
                    </p>

                </div>
            </div>
        </>
    )
}