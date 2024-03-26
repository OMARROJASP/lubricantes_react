import {ListaCategoria} from "../categoria/ListaCategoria.jsx";
export const PaginaPrincipal =()=> {

    return(
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold mb-8">Bienvenido a la tienda Rukanas</h1>
            <img src={"../src/components/tienda/lubricante.jpg"} alt="Lubricante" className="rounded-lg shadow-lg" />
            <ListaCategoria />
        </div>
    )
}