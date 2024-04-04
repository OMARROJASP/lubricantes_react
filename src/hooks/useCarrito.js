import {useDispatch, useSelector} from "react-redux";
import {findAllPedidoByUsuarioService} from "../service/CarritoService.js";
import {cargarCarrito} from "../store/slices/carrito/carritoSlice.js";

export const useCarrito =()=> {

    const {
        carritos
    } = useSelector(state => state.carritos);
    const dispatch = useDispatch()

    const cargarCarritoCompras= async (usuario)=> {
        console.log(usuario)
        const result = await findAllPedidoByUsuarioService(usuario);
        console.log(result)
        dispatch(cargarCarrito(result));
    }


    return{
        carritos,
        cargarCarritoCompras
    }
}