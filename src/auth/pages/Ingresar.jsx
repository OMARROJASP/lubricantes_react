import {useState} from "react";
import {useAuth} from "../hooks/useAuth.js";

const initialLoginForm = {
    nombre: '',
    contrasena: '',
}
export const Ingresar =()=> {

    const {handlerLogin} = useAuth();

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {nombre, contrasena} = loginForm;

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!nombre || !contrasena){
            console.log("username y password invalidos");
        }
        handlerLogin({nombre, contrasena});
        setLoginForm(initialLoginForm);

        console.log('Iniciar sesión con:', nombre, contrasena);
    };
    return(
        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
                        Iniciar sesión
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="nombre" className="sr-only">
                                Nombre de usuario
                            </label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="Nombre de usuario"
                                value={nombre}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="contrasena" className="sr-only">
                                Contraseña
                            </label>
                            <input
                                id="contrasena"
                                name="contrasena"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                                value={contrasena}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}