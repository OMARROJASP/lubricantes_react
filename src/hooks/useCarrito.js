import {useDispatch, useSelector} from "react-redux";
import {
    deleteDetalleByIdService,
    findAllDetalleByUsuarioByVentasService,
    findAllPedidoByUsuarioService, saveDetalleService,
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



    const updateCarritoVenta= async (detalle,cantidad,subTotal)=> {
        let response;
        response = await updateDetalleByIdService(detalle,cantidad,subTotal);

        dispatch(actualizarCarrito(response))
    }





    return{
        carritos,
        cargarCarritoCompras,
        guardarCarritoCompra,
        updateCarritoVenta,
        eliminarCarritoCompra
    }
}