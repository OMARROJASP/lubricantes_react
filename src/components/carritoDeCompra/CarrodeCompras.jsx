import { useCarrito } from "../../hooks/useCarrito.js";
import { DetalleCompraProducto } from "./DetalleCompraProducto.jsx";
import {useAuth} from "../../auth/hooks/useAuth.js";
import {useEffect, useState} from "react";
import {ResumenCompra} from "./ResumenCompra.jsx";
import {ProductoResumen} from "./ProductoResumen.jsx";
import {findAllDetalleByUsuarioByVentasServiceSimple} from "../../service/CarritoService.js";

export const CarrodeCompras = () => {
    const { login } = useAuth();
    const { carritos, cargarCarritoCompras, updateCarritoVenta, eliminarCarritoCompra } = useCarrito();

    const [total, setTotal]= useState(0);
    const [cargando,setCargando]= useState(false)

    const obtenerProductos = async ()=> {

        try {
            const respuesta = await findAllDetalleByUsuarioByVentasServiceSimple(login.user?.username);

            let sumatotal = 0;
            respuesta.data.forEach(c => {
                const subT = c.precioUnitario * c.cantidad;
                sumatotal += subT;
            });
            setTotal(sumatotal);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const sumaProducto = (suma)=> {
        setTotal(total+suma);
    }

    useEffect(() => {
        cargarCarritoCompras(login.user?.username);
        obtenerProductos()

    }, []);

    return (
        <>
            <h1 className=" my-4 text-center text-4xl text-amber-400 font-extrabold">
                Carrito de Compras
            </h1>
            <div className="flex justify-center">
                <div className="w-2/6 ">
                    <div>
                        {carritos.map(c =>
                            <ul key={c.id}>
                                <li>
                                    <DetalleCompraProducto
                                        key={c.id}
                                        id={c.id}
                                        producto={c.producto}
                                        cantidad={c.cantidad}
                                        precioUnitario={c.precioUnitario}
                                        subTotal={(c.precioUnitario * c.cantidad).toFixed(2)}
                                        carrito={c}
                                        onDelete={eliminarCarritoCompra}
                                        onUpdate={updateCarritoVenta}
                                        sumaProducto={sumaProducto}
                                        obtenerProductos={obtenerProductos}
                                    />
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="w-1/6 border-4 border-gray-300 p-4 rounded-xl m-4">
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
                                {carritos.map((c) => (
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
                </div>


            </div>
        </>
    )
}
