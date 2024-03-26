import {useCategoria} from "../../hooks/useCategoria.js";
import { useState} from "react";

export const ActualizarCategoria =()=> {


    const {guardarCategoriaBackend,
        seleccionarFormulario,
        cerrarFormulario,
        cargarCategoriasBackend,
        limpiarCategoriasBackend
    } = useCategoria(); // Asume que tienes un hook para manejar las categorías

    const [categoriaInfo, setCategoriaInfo] = useState({
        ...seleccionarFormulario
    });


    const {nombre, imagen} = categoriaInfo;

    const handleChange = ({target}) => {
        const {name, value} = target;
        setCategoriaInfo({...categoriaInfo, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        guardarCategoriaBackend(categoriaInfo);
        limpiarCategoriasBackend();
        cargarCategoriasBackend();
        cerrarFormulario();

    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-96 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Agregar Categoría</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre de la Categoría</label>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">URL de la Imagen</label>
                        <input
                            type="text"
                            name="imagen"
                            value={imagen || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Guardar Categoría
                    </button>
                </form>
            </div>
        </div>
    )
}