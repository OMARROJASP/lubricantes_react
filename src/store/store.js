import {configureStore} from "@reduxjs/toolkit";
import {categoriaSlice} from "./slices/categoria/categoriaSlice.js";
import {productoSlice} from "./slices/producto/productoSlice.js";
import {authSlice} from "./slices/auth/authSlice..js";
import {userSlice} from "./slices/usuario/usuarioSlice.js";
import {carritosSlice} from "./slices/carrito/carritoSlice.js";


export const store = configureStore({
    reducer:{
        categorias: categoriaSlice.reducer,
        productos: productoSlice.reducer,
        usuarios:userSlice.reducer,
        carritos:carritosSlice.reducer,
        auth:authSlice.reducer
    }
})