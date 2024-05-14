import {useEffect, useState} from "react";
import {ProductoResumen} from "./ProductoResumen.jsx";
import {useCarrito} from "../../hooks/useCarrito.js";
import {
    findAllDetalleByUsuarioByVentasServiceSimple
} from "../../service/CarritoService.js";

export const ResumenCompra =({calcularCostoTotal,usuario})=> {
    const { carritos } = useCarrito();
    const [producto, setProducto]= useState([]);

    const [total, setTotal]= useState(0);

    const [cargando,setCargando]= useState(false)

    useEffect(() => {
     const obtenerProductos = async ()=> {
         try {
             const respuesta = await findAllDetalleByUsuarioByVentasServiceSimple(usuario);
             setProducto(respuesta.data);

             let sumatotal = 0;
             respuesta.data.forEach(c => {
                 const subT = c.precioUnitario * c.cantidad;
                 sumatotal += subT;
             });
            setTotal(sumatotal);
            console.log("1");
         } catch (error) {
             console.error('Error:', error);
         }
     }
         obtenerProductos();
     }, []);



    return(
        <>
            <div>
                <p className="text-xl font-semibold mb-4">Resumen de la Compra</p>
                {cargando ? (

                        <div>
                            <button type="button" className="bg-indigo-500 " disabled>
                                <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">

                                </svg>
                                Procesando...
                            </button>
                        </div>
                ) : (
                    <>
                        <hr className="my-4" />
                        {producto.map((c) => (
                            <ul key={c.id}>
                                <li>
                                    <ProductoResumen
                                        key={c.id}
                                        producto={c.producto}
                                        cantidad={c.cantidad}
                                    />
                                </li>
                            </ul>
                        ))}
                        <hr className="my-4" />
                        <p className="text-xl font-semibold mb-4">Costo Total</p>
                        <p className="text-2xl text-amber-500">s/ {total.toFixed(2)}</p>
                        <div className="mt-6 flex justify-center">
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded mr-4">
                                Pagar Ahora
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                                Vaciar Carrito
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}