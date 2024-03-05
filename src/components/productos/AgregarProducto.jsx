import { useState } from "react";
import { useProducto } from "../../hooks/useProducto.js";
import {useParams} from "react-router-dom";

export const AgregarProducto = () => {

    const {idCategoria} = useParams();
    const { guardarProductoBackend, selecionarFormulario } = useProducto();


    const [productInfo, setProductInfo] = useState({
        ...selecionarFormulario,
        nombre: "", cantidad: "", precio: "", descuento: "", imagen: "",marca:""
    });




    const { nombre, cantidad, precio, descuento, imagen, marca } = productInfo;

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProductInfo({ ...productInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        console.log(idCategoria)
        e.preventDefault();
        guardarProductoBackend(productInfo,idCategoria);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-96 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Agregar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre del Producto</label>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" // <-- Ancho completo
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre de la marca</label>
                        <input
                            type="text"
                            name="marca"
                            value={marca || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" // <-- Ancho completo
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Cantidad</label>
                        <input
                            type="number"
                            name="cantidad"
                            value={cantidad || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" // <-- Ancho completo
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Precio</label>
                        <input
                            type="number"
                            name="precio"
                            value={precio || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" // <-- Ancho completo
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Descuento</label>
                        <input
                            type="number"
                            name="descuento"
                            value={descuento || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" // <-- Ancho completo
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Imagen URL</label>
                        <input
                            type="text"
                            name="imagen"
                            value={imagen || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" // <-- Ancho completo
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Guardar Producto
                    </button>
                </form>
            </div>
        </div>
    );
};
