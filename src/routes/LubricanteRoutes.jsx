import {Navbar} from "../components/Navbar.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {LubricantesPage} from "../pages/LubricantesPage.jsx";
import {Tienda} from "../components/productos/Tienda.jsx";
import {AgregarProducto} from "../components/productos/AgregarProducto.jsx";
import {AgregarCategoria} from "../components/categoria/AgregarCategoria.jsx";
import {ActualizarCategoria} from "../components/categoria/ActualizarCategoria.jsx";
import {ComprarProducto} from "../components/productos/ComprarProducto.jsx";
import {ActualizarProducto} from "../components/productos/ActualizarProducto.jsx";

export const LubricanteRoutes =()=> {
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path={"categorias"} element={<LubricantesPage/>} />
                <Route path={"categorias/:idCategoria/productos"} element={<Tienda/>} />
                <Route path={"categorias/agregar"} element={<AgregarCategoria/>} />
                <Route path={"categorias/:idCategoria/productos/:idCompra/comprar"} element={<ComprarProducto/>} />
                <Route path={"categorias/:idCategoria/productos/:idCompra/comprar/actualizar"} element={<ActualizarProducto/>} />
                <Route path={"categorias/actualizar/:id"} element={<ActualizarCategoria/>} />
                <Route path={"categorias/:idCategoria/productos/agregar"} element={<AgregarProducto/>} />
                <Route path={"/"} element={<Navigate to={"/categorias"}/> } />
            </Routes>


        </>
    )
}