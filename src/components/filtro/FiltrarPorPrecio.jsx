import { useEffect, useState } from "react";
import { useProducto } from "../../hooks/useProducto.js";
import { useParams } from "react-router-dom";

export const FiltrarPorPrecio = ({ minimo = 0, maximo = 0 }) => {
    const { idCategoria } = useParams();
    const { filtrarProductosPorPrecios } = useProducto();

    const [precioMinimo, setPrecioMinimo] = useState(minimo);
    const [precioMaximo, setPrecioMaximo] = useState(maximo);

    const handleMinimoChange = (event) => {
        const newValue = parseInt(event.target.value);
        setPrecioMinimo(newValue);
    };

    const handleMaximoChange = (event) => {
        const newValue = parseInt(event.target.value);
        setPrecioMaximo(newValue);
    };

    const filtro = (id) => {
        const precio = [precioMinimo, precioMaximo];
        filtrarProductosPorPrecios(precio, id);
    };

    useEffect(() => {
        setPrecioMinimo(minimo);
        setPrecioMaximo(maximo);
    }, [minimo, maximo]);

    return (
        <div className="grid grid-rows-4 gap-2">
            <div className="flex flex-col items-center">
                <p className="text-sm font-bold mb-2">Rango de precios</p>
                <div className="flex flex-row w-full">
                    <input
                        type="range"
                        min={(minimo - 1).toString()}
                        max={isNaN(maximo) ? '' : (maximo + 2).toString()} // Convertir maximo a string solo si no es un número
                        value={precioMinimo}
                        onChange={handleMinimoChange}
                        className="w-full h-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="range"
                        min={isNaN(maximo) ? '' : ((maximo + minimo) / 2).toString()}
                        max={isNaN(maximo) ? '' : (maximo + 2).toString()} // Convertir maximo a string solo si no es un número
                        value={precioMaximo}
                        onChange={handleMaximoChange}
                        className="w-full h-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>
            <div className="flex justify-around">
                <label>S/. {precioMinimo}</label>
                <p> - </p>
                <label>S/. {precioMaximo}</label>
            </div>
            <div>
                <button
                    className="text-white bg-yellow-400 px-2 rounded"
                    onClick={() => filtro(idCategoria)}
                >
                    Filtrar
                </button>
            </div>
        </div>
    );
};
