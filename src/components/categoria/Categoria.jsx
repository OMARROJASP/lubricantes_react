import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCategoria} from "../../hooks/useCategoria.js";
import {useAuth} from "../../auth/hooks/useAuth.js";

export const Categoria=({category})=> {
    const { login } = useAuth();
    const {cargarFormulario,eliminarCategoriaBack }= useCategoria();
    const [categoria, setCategoria] = useState(category);
    const navigate = useNavigate();
    const seleccionarCategoria =(categoria)=> {
        cargarFormulario(categoria)
        navigate(`/tienda/categoria/actualizar/${categoria.id}`);
    }

    const deleteCategoria =(id)=> {
        eliminarCategoriaBack(id);
    }

    const verProductos =()=> {
        navigate(`/categorias/${categoria.id}/productos`);
    }


    return (
        <>

                <div className="border-2 border-gray-400 rounded shadow-gray-600 hover:border-amber-400 hover:border-4">
                    <div className="flex items-center justify-between">
                        <div className="ml-3 text-center font-bold">
                            <p>{categoria.nombre}</p>
                        </div>
                        <div className="mr-5">
                            <img src={categoria.imagen} className="w-auto h-40" alt={categoria.nombre} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <button
                                className="bg-yellow-400 text-white rounded-md m-2 p-2 text-sm"
                                onClick={verProductos}
                            >
                                Productos
                            </button>
                        </div>
                        {
                            !login.isAdmin || (
                                <div >
                                    <button
                                        className="bg-green-600 text-white rounded-md m-2 p-2 text-sm"
                                        onClick={() => seleccionarCategoria(categoria)}
                                    >
                                        Actualizar
                                    </button>
                                    <button
                                        className="bg-red-600 text-white rounded-md m-2 p-2 text-sm"
                                        onClick={()=>deleteCategoria(categoria.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            )
                        }


                    </div>
                </div>
        </>
    );

}