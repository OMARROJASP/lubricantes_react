import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const traerProductos = async (idCategoria)=>{
    try{
        const response = await axios.get(`${BASE_URL}/productos/lista/${idCategoria}`);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const traerProductoById = async (idProducto)=> {
    try{
        const response = await axios.get(`${BASE_URL}/productos/${idProducto}`);
        return response.data;
    } catch (e){
        console.error(e);
    }
}

export const traerProductoByDescuento = async ()=> {
    try{
        const response = await axios.get(`${BASE_URL}/productos/descuento`);
        return response.data;
    } catch (e){
        console.error(e);
    }
}


export const guardarProducto = async (producto,categoria)=> {
    const {nombre,marca,cantidad,precio, descuento, imagen} = producto;
    try {
        console.log(producto);

        const response = await axios.post(`${BASE_URL}/productos/guardar`,{
            nombre,marca,cantidad,precio, descuento, imagen,categoria

        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error)

    }
}


export const actualizarProductoBackend = async( producto)=> {
    const {id,nombre,marca,cantidad,precio, descuento, imagen,categoria} = producto;


    try {
        console.log(producto);
        const response = await axios.put(`${BASE_URL}/productos/actualizar/${id}`,{
           id, nombre,marca,cantidad,precio, descuento, imagen,categoria

        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error)
    }
}