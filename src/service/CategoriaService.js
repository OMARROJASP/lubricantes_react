import axios from "axios";


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const traerCategorias = async ()=> {
    try{
       const response = await axios.get(`${BASE_URL}/categorias`)

        console.log("Iniciando solicitud de traer las categoría...");
        return response.data;

    }catch (e) {
        console.error(e);

    }
}

export const traerByCategoria = async (idCategoria)=> {
    try {
        const response = await axios.get(`${BASE_URL}/categorias/${idCategoria}`)
        return response.data;
    }catch (e) {
        console.error(e);

    }
}

export const guardarCategoria = async (categoria)=> {
    const {nombre,imagen} = categoria;
    try {
        const response = await axios.post(`${BASE_URL}/categorias/guardar`,{
            nombre, imagen
        })

        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const actualizarCategoriaBackend = async (categoria) => {
    const { id, nombre, imagen } = categoria;

    console.log("Iniciando solicitud de actualización de categoría...");

    try {
        const response = await axios.put(`${BASE_URL}/categorias/actualizar/${id}`, {
            nombre,
            imagen
        });

        console.log("Solicitud de actualización de categoría completada con éxito.");

        return response.data;
    } catch (error) {
        console.error("Error al actualizar la categoría:", error);
        throw new Error("Error al actualizar la categoría. Por favor, inténtalo de nuevo más tarde.");
    }
};

export const eliminarCategoriaBackend = async(id)=> {
    try {
        await axios.delete(`${BASE_URL}/categorias/eliminar/${id}`)
    }catch (error) {
        console.error("Error al eliminar la categoría:", error);
        throw new Error("Error al eliminar la categoría. Por favor, inténtalo de nuevo más tarde.");
    }
}