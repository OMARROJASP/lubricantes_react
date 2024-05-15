import lubricanteApi from "../apis/lubricanetsApi.js";
import {findByUsuarioService} from "./UsuarioService.js";
const BASE_URL = '';
export const savePedidoService = async (user)=> {
    let estado = 0;

    try {
        const user1 = await findByUsuarioService(user);
        const data = {
            usuario: user1.id,
            estado: estado
        };

        const response = await lubricanteApi.post(`${BASE_URL}/pedidos`, data);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}