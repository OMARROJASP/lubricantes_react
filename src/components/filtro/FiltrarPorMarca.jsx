import {useState} from "react";
import {useProducto} from "../../hooks/useProducto.js";


export const FiltrarPorMarca =({marcas,product,idCategoria})=> {
    const {filtrarProductosPorMarca,cargarProductosBackend} = useProducto();
    const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);

    const handleChange =(event)=> {
        const marca = event.target.value

        const nuevaSeleccion = marcasSeleccionadas.includes(marca)
            ? marcasSeleccionadas.filter((m) => m !== marca)
            : [...marcasSeleccionadas, marca];
        setMarcasSeleccionadas(nuevaSeleccion);

    };

    const filtrar =()=>{

        filtrarProductosPorMarca(marcasSeleccionadas,idCategoria);
        if(marcasSeleccionadas.length === 0) {
            cargarProductosBackend(idCategoria)
        }
    }


    return(
        <div className={"flex flex-col"}>
            {marcas.map((marca) => (
                <div key={marca} className={"ml-4 flex items-center"}>
                    <input
                        className={"mr-2"}
                        key={marca}
                        type="checkbox"
                        value={marca}
                        checked={marcasSeleccionadas.includes(marca)}
                        onChange={handleChange}
                    />
                    <h1>{marca}</h1>
                </div>
            ))}
            <button
                className={"text-white bg-yellow-400 px-2 rounded"}
                onClick={filtrar}>Filtrar</button>
        </div>
    )
}

/*
 <div className={"flex "}>
            <input  className={"ml-4"}
                    type={"checkbox"}
                    checked={isChecked}
                    onChange={handleCheckboxChange}/>
            <h1 className={"ml-3"}>{product}</h1>
        </div>
 */