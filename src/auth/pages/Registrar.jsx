import {useState} from "react";
import {useAuth} from "../hooks/useAuth.js";
import {useUsuario} from "../../hooks/useUsuario.js";


const initialLoginForm = {
    id:0,
    nombre: '',
    contrasena: '',
    correo:'',
}
export const Register =()=> {

  const {  handlerAddUser} = useUsuario()

    const {handlerLogin} = useAuth();

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {nombre, contrasena, correo} = loginForm;

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

        console.log(loginForm)
        handlerAddUser(loginForm)
        handlerLogin({nombre, contrasena});
        setLoginForm(initialLoginForm);

        console.log('Iniciar sesión con:', nombre, contrasena);
    };
    return(
        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
                      Registrar Usuario
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Nombre de usuario
                            </label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                autoComplete="nombre"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="Nombre de usuario"
                                value={nombre}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <label className="sr-only">
                                Correo Electronico
                            </label>
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder=" Correo Electronico"
                                value={correo}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <label  className="sr-only">
                                Contraseña
                            </label>
                            <input
                                id="contrasena"
                                name="contrasena"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                                value={contrasena}
                                onChange={onInputChange}
                            />

                            {/*<label  className="sr-only">*/}
                            {/*   Repita Contraseña*/}
                            {/*</label>*/}
                            {/*<input*/}
                            {/*    id="contasenaAux"*/}
                            {/*    name="contasenaAux"*/}
                            {/*    type="passwordAux"*/}
                            {/*    autoComplete="current-password"*/}
                            {/*    required*/}
                            {/*    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"*/}
                            {/*    placeholder="Repita Contraseña"*/}
                            {/*    value={contasenaAux}*/}
                            {/*    onChange={onInputChange}*/}
                            {/*/>*/}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                           Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}