import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

export const Producto =({product})=> {

    const navigate = useNavigate()
    const [producto,setProducto] = useState(product)
    const [expandir, setExpandir] = useState(false);

    const handleMouseEnter = () => {
        setExpandir(true);
    };

    const handleMouseLeave = () => {
        setExpandir(false);
    };

    const comprarProducto =()=> {
        navigate(`${producto.id}/comprar`)
    }


    return(
            <div onClick={comprarProducto} className={"grid grid-rows-2 border-2 border-gray-400 rounded-2xl shadow-gray-600 hover:border-amber-300"}
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={"flex justify-center"}>
                    <img src={producto.imagen} className="w-auto h-40" />
                </div>
                <div >
                    <div className={"flex items-center justify-center text-center bg-gray-200 h-24"}>
                        <p className={'text-gray-600'}>{producto.nombre} - {producto.categoria.nombre} </p>
                    </div>
                    <div>
                        <p className={"ml-2 font-bold text-gray-400"}>S/ {producto.precio}</p>
                        <p className={"ml-2 font-bold text-blue-600"}>S/ {((producto.precio * 105) / 100).toFixed(2)}</p>
                        <p className={"ml-2 font-bold text-red-600"} >S/ {(producto.precio - (producto.precio * producto.descuento / 100)).toFixed(2)}</p>
                    </div>
                </div>

                {expandir && <button
                    className="bg-amber-400 text-white rounded-md m-2 p-2 text-sm hover:bg-green-600"
                >Comprar</button>}
            </div>



    )
}
/*
 id:1,
 image:""
        categoria: "Motores a Gasolina y Gas",
        nombre:"Mobil SUPER 5W30 SINTETICO",
        cantidad:"",
        precioNormal:90.32,
        precioDescuento:90.32,
        precioTarjeta: 84.90
 */