import { useEffect, useState } from "react";
import { faSquarePlus,faSquareMinus,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProducto } from "../../hooks/useProducto.js";

export const DetalleCompraProducto = (
    { id, producto, cantidad, precioUnitario, subTotal,
        carrito, onDelete, onUpdate,sumaProducto,obtenerProductos }) => {

    const { comprarProductoBackend } = useProducto();
    const [product, setProduct] = useState({});
    const [cant, setCant] = useState(cantidad);
    const [total, setTotal] = useState(subTotal);

    const cambiarCantidad =  (numero,precioUnit) => {
        if (cant + numero > 0) {
            setCant(cant + numero);
            onUpdate(carrito, cant + numero, total + (numero * precioUnitario).toFixed(2));
            sumaProducto(precioUnit);
        }
    }

    const eliminarDetalleCompra = async (id) => {

        onDelete(id);
        await obtenerProductos();
    }

    useEffect(() => {
        const cargarProducto = async (id) => {
            const productoCargado = await comprarProductoBackend(id);
            setProduct(productoCargado);
            setTotal((cant * precioUnitario).toFixed(2));
        };
        cargarProducto(producto);

    },[cant] );

    return (
        <div className={"grid grid-cols-7 bg-white border-4 m-4 rounded-xl p-2 font-medium "}>
            <div className={"col-span-3"}>
                <p className={"my-2"}>Producto: {product.nombre}</p>
                <div className={"flex items-center  "}>
                    <p className={"my-2 hover:items-center"}>Cantidad :
                        <FontAwesomeIcon onClick={() => cambiarCantidad(-1, -precioUnitario)} className="h-4 mx-3 hover:h-6 "  icon={faSquareMinus} style={{ color: "#FFD43B" }} />

                        {cant}
                        <FontAwesomeIcon onClick={() => cambiarCantidad(1, precioUnitario)} className="h-4 mx-3 hover:h-6"  icon={faSquarePlus} style={{ color: "#FFD43B" }} />

                    </p>

                </div>
                <p className={"my-2"}>Precio Unitario : S/ {precioUnitario}</p>
                <p className={"my-2"}>Total : S/ {total}</p>
            </div>

            <div className="flex justify-center items-center col-span-3 h-40">
                <div className="w-24 h-36 overflow-hidden">
                    <img src={product.imagen} alt="Imagen del producto" className="w-full h-auto" />
                </div>
            </div>
            <div>
                <p className="relative flex justify-end">
                    <FontAwesomeIcon onClick={() => eliminarDetalleCompra(id)} className="h-5 mx-3 transition-transform transform-gpu hover:-translate-y-1" icon={faCircleXmark}  style={{color: "#636365"}}/>
                </p>

            </div>
        </div>
    );
}
