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

export const findAllDetalleByUsuarioByVentasService = async (usuario)=> {
    try {
        const response = await lubricanteApi.get(`${BASE_URL}/detalle/ventas/${usuario}`);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}

export const updateDetalleByIdService = async (detalle,cantidad, subTotal)=> {
    const {id,pedido,producto,precioUnitario} = detalle;
    try {
        const response = await lubricanteApi.put(`${BASE_URL}/detalle/update/${id}`,{
            pedido,producto,cantidad,precioUnitario,subTotal
        });
        return response.data;
    }catch (e) {
        console.log(e)
    }
}

export const deleteDetalleByIdService = async (id)=> {
    try {
        await lubricanteApi.delete(`${BASE_URL}/detalle/delete/${id}`)
    }catch (e) {
        console.log(e)
    }
}

export const saveDetalleService = async (detalle, pedido) => {
    const { cantidad, producto, precioUnitario, subTotal } = detalle;
    try {
        console.log(detalle, pedido);
        const response = await lubricanteApi.post(`${BASE_URL}/detalle/save`, {
            pedido: pedido,
            producto: producto,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            subTotal: subTotal
        });
        return response.data;
    } catch (e) {
        console.log(e);
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