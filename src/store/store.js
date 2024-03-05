import {configureStore} from "@reduxjs/toolkit";
import {categoriaSlice} from "./slices/categoria/categoriaSlice.js";
import {productoSlice} from "./slices/producto/productoSlice.js";

export const store = configureStore({
    reducer:{
        categorias: categoriaSlice.reducer,
        productos: productoSlice.reducer
    }
})