import {useCarrito} from "../../hooks/useCarrito.js";
import {useEffect} from "react";
import {DetalleCompraProducto} from "./DetalleCompraProducto.jsx";
import {useAuth} from "../../auth/hooks/useAuth.js";

export const CarrodeCompras=()=> {
    const { login } = useAuth();
    const {carritos,cargarCarritoCompras} = useCarrito();

    const cargarDatos =()=> {
        cargarCarritoCompras(login.user?.username)
    }

    useEffect(() => {
        cargarDatos();
    }, []);

    return(
        <>
            <h1>Carrito de Compras</h1>

            <div className={"flex items-center justify-center"}>
                <div className={"bg-gray-200 w-2/4"}>
                    <div>
                        {carritos.map(c =>
                           <ul key={c.id}>
                               <li>
                                   <DetalleCompraProducto
                                        pedido={c.pedido}
                                        producto={c.producto}
                                        cantidad={c.cantidad}
                                        precioUnitario={c.precioUnitario}
                                        subTotal={c.subTotal}
                                   />
                               </li>
                           </ul>
                        )}
                    </div>
                </div>
                <div className={"bg-gray-200"}>

                </div>
            </div>
        </>
    )
}