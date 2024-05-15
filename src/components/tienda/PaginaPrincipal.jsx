import {ListaCategoria} from "../categoria/ListaCategoria.jsx";
import imgUrl  from './lubricante.jpg'
export const PaginaPrincipal =()=> {

    return(
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold mb-8">Bienvenido a la tienda Rukanas</h1>
            <img src={imgUrl} alt="Lubricante" className="rounded-lg shadow-lg" />
            <ListaCategoria />
        </div>
    )
}