import {Navbar} from "../components/Navbar.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {LubricantesPage} from "../pages/LubricantesPage.jsx";
import {Tienda} from "../components/productos/Tienda.jsx";
import {AgregarProducto} from "../components/productos/AgregarProducto.jsx";
import {AgregarCategoria} from "../components/categoria/AgregarCategoria.jsx";
import {ActualizarCategoria} from "../components/categoria/ActualizarCategoria.jsx";
import {ComprarProducto} from "../components/productos/ComprarProducto.jsx";
import {ActualizarProducto} from "../components/productos/ActualizarProducto.jsx";
import {Footer} from "../components/Footer.jsx";
import {Ingresar} from "../auth/pages/Ingresar.jsx";
import {Register} from "../auth/pages/Registrar.jsx";
import {CarrodeCompras} from "../components/carritoDeCompra/CarrodeCompras.jsx";
import {Ofertas} from "../components/ofertas/Ofertas.jsx";
import {IngresarDatosTarjeta} from "../components/venta/IngresarDatosTarjeta.jsx";

export const LubricanteRoutes =()=> {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow">
                <Routes>
                    <Route path={"tienda"} element={<LubricantesPage/>} />
                    <Route path={"categorias/:idCategoria/productos"} element={<Tienda/>} />
                    <Route path={"/tienda/categoria/agregar"} element={<AgregarCategoria/>} />
                    <Route path={"categorias/:idCategoria/productos/:idCompra/comprar"} element={<ComprarProducto/>} />
                    <Route path={"/ofertas/:idCompra/comprar"} element={<ComprarProducto/>} />
                    <Route path={"categorias/:idCategoria/productos/:idCompra/comprar/actualizar"} element={<ActualizarProducto/>} />
                    <Route path={"/ofertas/:idCompra/comprar/actualizar"} element={<ActualizarProducto/>} />

                    <Route path={"tienda/categoria/actualizar/:id"} element={<ActualizarCategoria/>} />
                    <Route path={"categorias/:idCategoria/productos/agregar"} element={<AgregarProducto/>} />
                    <Route path={"carrito"} element={<CarrodeCompras/>} />
                    <Route path={"/login"} element={<Ingresar/>} />
                    <Route path={"/register"} element={<Register/>} />
                    <Route path={"/ofertas"} element={<Ofertas/>} />
                    <Route path={"tienda/comprar/pagar"} element={<CarrodeCompras/>} />
                    <Route path={"tienda/comprar/pagar/datos"} element={<IngresarDatosTarjeta/>} />
                    <Route path={"categorias/:idCategoria/productos/:idCompra/comprar/pagar"} element={<CarrodeCompras/>} />
                    <Route path={"/"} element={<Navigate to={"/tienda"}/> } />
                </Routes>
            </div>

            <Footer/>


        </div>
    )
}