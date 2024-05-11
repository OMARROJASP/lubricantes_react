import {useCarrito} from "../../hooks/useCarrito.js";
import {useEffect, useState} from "react";
import {DetalleCompraProducto} from "./DetalleCompraProducto.jsx";
import {useAuth} from "../../auth/hooks/useAuth.js";

export const CarrodeCompras=()=> {
    const { login } = useAuth();
    const {carritos,cargarCarritoCompras} = useCarrito();
    const [sumaTotal, setSumaTotal] = useState(0);
    const sumaTotalProductos=()=> {
        let total = 0;
        carritos.forEach(c => {
            const subT = c.precioUnitario * c.cantidad;
            total += subT;
            console.log( total)
        });
        setSumaTotal(total);
    }
    const cargarDatos =()=> {
        cargarCarritoCompras(login.user?.username)

    }



    useEffect(() => {
        cargarDatos();
        sumaTotalProductos()
    }, [login.user?.username]);

    useEffect(() => {
        setSumaTotal(sumaTotalProductos());
    }, [carritos]);
    return(
        <>
            <h1>Carrito de Compras</h1>

            <div className={"flex items-center justify-center"}>
                <div className={"bg-gray-200 w-3/4"}>
                    <div>
                        {carritos.map(c =>
                           <ul key={c.id}>
                               <li>
                                   <DetalleCompraProducto
                                        id={c.id}
                                        producto={c.producto}
                                        cantidad={c.cantidad}
                                        precioUnitario={c.precioUnitario}
                                        subTotal={c.precioUnitario * c.cantidad}
                                        sumaTotalProductos={sumaTotalProductos}
                                        carrito={c}

                                   />
                               </li>
                           </ul>
                        )}
                    </div>
                </div>
                <div className={"bg-gray-200 m-2 rounded p-2" }>
                    <p>Venta total : {sumaTotal}</p>
                </div>
            </div>


        </>
    )
}