import {Categoria} from "./Categoria.jsx";
import {NavLink} from "react-router-dom";
import {useCategoria} from "../../hooks/useCategoria.js";
import {useEffect} from "react";
import {useAuth} from "../../auth/hooks/useAuth.js";





export const ListaCategoria =()=> {
    const { login } = useAuth();
    const {categorias,cargarCategoriasBackend,seleccionarFormulario }= useCategoria();


    const CargarCategoriasDeLista =()=> {
        cargarCategoriasBackend();
    }


    useEffect(() => {
        CargarCategoriasDeLista();
    }, []);

    return (
        <>

           <div >
               <div className={"flex items-center justify-between  "}>
                   <div className={"flex items-center my-4  ml-4"}>
                       <div className="h-1 bg-amber-400 h-10 w-4 mr-2"></div>
                       <h1 className={"text-3xl font-bold"}>CATEGORIAS</h1>

                   </div>
                   {
                       !login.isAdmin ||
                       <div >
                           <NavLink
                               className={"mr-4 p-2 rounded-2xl text-white bg-green-500"}
                               to={'agregar'}
                           >
                               Agregar Categoria
                           </NavLink>

                       </div>
                   }


               </div>
               <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4"}>
                   {
                       categorias.map(c => (
                           <Categoria
                               key={c.id}
                               category={c}
                           />

                       ))
                   }
               </div>
           </div>

        </>
    )
}