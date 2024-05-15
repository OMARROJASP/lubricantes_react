import {createSlice} from "@reduxjs/toolkit";

export const formularioCarrito ={

}
export const carritosSlice = createSlice({

    name:'carritos',
    initialState:{
        carritos:[]
    },
    reducers :{
        agregarCarrito:(state, action)=> {
            state.carritos = [
                ...state.carritos,{
                    ...action.payload
                }
            ]
        },
        eliminarCarrito: (state, action) => {
            state.carritos = state.carritos.filter(n => (n.id !== action.payload));
        },
        cargarCarrito: (state, action) => {
            state.carritos = action.payload;
        },
        limpiarCarrito:state => {
            state.carritos = [];
        },
        actualizarCarrito:(state, action) => {
            state.carrito = state.carritos.map(u=> {
                if(u.id === action.payload.id){
                    return{
                        ...action.payload
                    };
                }
                return u;
            })
        },

    }
})

export const {
    agregarCarrito,
    eliminarCarrito,
    cargarCarrito,
    limpiarCarrito,
    actualizarCarrito
} = carritosSlice.actions;