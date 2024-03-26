import {useEffect, useState} from "react";
import {Producto} from "./Producto.jsx";
import {useProducto} from "../../hooks/useProducto.js";
import {NavLink, useParams} from "react-router-dom";
import {useCategoria} from "../../hooks/useCategoria.js";
import {useAuth} from "../../auth/hooks/useAuth.js";

export const ListaProducto =()=> {
    const { login } = useAuth();
    const {idCategoria} = useParams();
    const {cargarCategoriarById} = useCategoria();
    const {productos, cargarProductosBackend } = useProducto();
    const [loading, setLoading] = useState(true);
    const [categoria, setCategoria] =useState({})
    const CargarProductosDeLista =()=> {
        cargarProductosBackend(idCategoria)
            .then(() => setLoading(false))
            .catch(error => {
                console.error("Error al cargar productos:", error);
                setLoading(false);
            });
    }

    const cargarCategoria = async () => {
        try {
            const result = await cargarCategoriarById(idCategoria);
            setCategoria(result);
        } catch (error) {
            console.error('Error al cargar la categoría:', error);
        }
    }

    useEffect(() => {
        CargarProductosDeLista();
        cargarCategoria()
    }, []);

    return(
        <>
            <div className={""}>
               <div className={"flex items-center justify-between  "}>
                   <div className={"flex items-center my-4 "}>
                       <div className="h-1 bg-amber-400 h-10 w-4 mr-2"></div>
                       <h1>{categoria.nombre}</h1>

                   </div>
                   {
                       !login.isAdmin || (
                           <div>
                               <NavLink
                                   className={"mr-4 p-2 rounded-2xl text-white bg-green-500"}
                                   to={'agregar'}
                               >
                                   Agregar Producto
                               </NavLink>

                           </div>
                       )
                   }


               </div>
                <div >
                    {productos.length === 0 ? (


                        <div className={"  flex items-center h-48 justify-center"}>
                            <p className={"font-medium"}>NO HAY PRODUCTOS DISPONIBLES.</p>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                            {productos.map(p => (
                                <Producto key={p.id} product={p} />
                            ))}
                        </div>
                    )
                    }
                </div>
            </div>

        </>
    )
}