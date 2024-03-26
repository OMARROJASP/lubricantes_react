import axios from "axios";

export const loginUser = async ({ nombre, contrasena }) => {


    try {
        console.log(nombre)
        console.log(contrasena)
        const response = await axios.post('http://localhost:8080/login', {
            nombre,
            contrasena
        });
        // Se comprueba si la solicitud fue exitosa antes de devolver los datos
        if (response.status === 200) {
            return response; // Suponiendo que el servidor devuelve los datos del usuario
        } else {
            throw new Error('La solicitud de inicio de sesión no fue exitosa');
        }
    } catch (error) {
        // Se maneja cualquier error capturado
        console.error('Error al iniciar sesión:', error);
        throw error; // Se relanza el error para que el llamador pueda manejarlo adecuadamente
    }
}