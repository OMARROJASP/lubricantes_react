import axios from "axios";


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ({ nombre,contrasena, correo}) => {
    try {
        return await axios.post(`${BASE_URL}/usuarios`, {
            nombre,contrasena, correo
        });
    } catch (error) {
        throw error;
    }
}

export const update = async({ id,  nombre, correo }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            nombre, correo
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}