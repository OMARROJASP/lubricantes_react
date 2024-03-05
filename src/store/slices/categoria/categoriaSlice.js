import {createSlice} from "@reduxjs/toolkit";

export const formularioVacioCategoria = {
    id:0,
    titulo:"",
    imagen: ""
}

export const categoriaSlice = createSlice({

    name: 'categorias',
    initialState:{
        categorias:[],
        seleccionarFormulario: formularioVacioCategoria,
        loadingCategoria: false
    },

    reducers:{
        agregarCategoria:(state, action)=> {
            state.categorias = [
                ...state.categorias,{
                ...action.payload
                }
            ]
        },
        eliminarCategoria: (state, action) => {
            state.categorias = state.categorias.filter(n => (n.id !== action.payload));
        },
        cargarCategoria: (state, action) => {
            state.categorias = action.payload;
        },
        limpiarCategoria:state => {
            state.categorias = [];
        },
        actualizarCategoria:(state, action) => {
            state.categorias = state.categorias.map(u=> {
                if(u.id === action.payload.id){
                    return{
                        ...action.payload
                    };
                }
                return u;
            })
        },
        onSeleccinarFormulario:(state, {payload})=> {
            state.seleccionarFormulario = payload;
        },
        onCerrarFormularioSeleccionado:(state)=> {
            state.seleccionarFormulario = formularioVacioCategoria;
        }
    }
})


export const {
    agregarCategoria,
    eliminarCategoria,
    cargarCategoria,
    limpiarCategoria,
    actualizarCategoria,
    onSeleccinarFormulario,
    onCerrarFormularioSeleccionado
} = categoriaSlice.actions;