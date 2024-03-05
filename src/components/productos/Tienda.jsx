import {FiltrarInformacion} from "../filtro/FiltrarInformacion.jsx";
import {ListaProducto} from "./ListaProducto.jsx";




export const Tienda =({id,titulo}) => {
    return(
        <>
        <div className={"grid grid-cols-4"}>
            <div className={"border border-black m-2 p-3"}>
                <FiltrarInformacion/>
            </div>


            <div className={"col-span-3"}>
                <ListaProducto/>
            </div>
        </div>
        </>
    )
}