import lubricanteApi from "../apis/lubricanetsApi.js";
import {findByUsuarioService} from "./UsuarioService.js";


const BASE_URL = '';
export const findAllService = async ()=> {
    try {
        const response = await lubricanteApi.get(`${BASE_URL}/detalle`);
       console.log(response.data)
        return response.data;
    }catch (e) {
        console.log(e)
    }
}

export const findAllPedidoByUsuarioService = async (usuario)=> {
    try {

        const user = await findByUsuarioService(usuario);
        console.log(user)
        const pedido = await lubricanteApi.get(`${BASE_URL}/pedidos/lista_usuario/${user.id}`);
        const idPedido = pedido.data.id;
        console.log(pedido.data);
        const response = await lubricanteApi.get(`${BASE_URL}/detalle/pedido/${idPedido}`);
        console.log(response.data)
        return response.data;
    }catch (e) {
        console.log(e)
    }
}