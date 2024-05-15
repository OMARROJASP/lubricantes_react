import {useDispatch, useSelector} from "react-redux";
import {
    deleteDetalleByIdService,
    findAllDetalleByUsuarioByVentasService,
    saveDetalleService,
    updateDetalleByIdService
} from "../service/CarritoService.js";
import {
    actualizarCarrito,
    agregarCarrito,
    cargarCarrito,
    eliminarCarrito
} from "../store/slices/carrito/carritoSlice.js";
import {savePedidoService} from "../service/PedidoService.js";


export const useCarrito =()=> {

    const {
        carritos
    } = useSelector(state => state.carritos);
    const dispatch = useDispatch()

    const cargarCarritoCompras= async (usuario)=> {
        const result = await findAllDetalleByUsuarioByVentasService(usuario);
        dispatch(cargarCarrito(result));
    }
    const datosCarritoCompras = async (usuario)=> {
        return  await findAllDetalleByUsuarioByVentasService(usuario);
    }

    const guardarCarritoCompra = async (detalle, user)=> {
        let response;
        let pedido;
                pedido = await savePedidoService(user);
                console.log(pedido.id)
                response = await saveDetalleService(detalle,pedido.id);
                dispatch(agregarCarrito(response))

      //  return pedido.id;
    }

    const eliminarCarritoCompra = async (id)=> {
        await deleteDetalleByIdService(id)
        dispatch(eliminarCarrito(id))
    }

    const obtenerVentaTotal = () => {
        //cargarCarritoCompras();
        let tot = 0;
        console.log("nani");
        console.log(carritos);
        carritos.forEach(c => {
            const subT = c.precioUnitario * c.cantidad;
            tot = tot + subT;
            console.log(tot);
        });
        console.log("nani");
        console.log(tot);
        return carritos.reduce((total, c) => total + c.precioUnitario * c.cantidad, 0).toFixed(2);
    }

    const updateCarritoVenta= async (detalle,cantidad)=> {
        let response;
        response = await updateDetalleByIdService(detalle,cantidad);
        dispatch(actualizarCarrito(response))
    }





    return{
        carritos,
        cargarCarritoCompras,
        guardarCarritoCompra,
        updateCarritoVenta,
        eliminarCarritoCompra,
        obtenerVentaTotal,
        datosCarritoCompras
    }
}