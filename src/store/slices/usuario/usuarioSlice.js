import {createSlice} from "@reduxjs/toolkit";

export const formularioAgregarUsuario = {
    id:0,
    username:'',
    password:'',
    email:'',
    admin:false
}

const formularioError = {
    username: '',
    password: '',
    email: '',
}

export const userSlice = createSlice({
    name:'usuarios',
    initialState:{
        usuarios:[],
        usuarioSelecionado: formularioAgregarUsuario,
        visibleFormulario: false,
        errors: formularioError,
    },
    reducers:{
        agregarUsuario:(state, action)=> {
            state.usuarios = [
                ...state.usuarios,
                {
                    ...action.payload
                }
            ];
            state.usuarioSelecionado = formularioAgregarUsuario;
            state.visibleFormulario= false
        },
        removeUsuario:(state,action) => {
            state.usuarios = state.usuarios.filter(user => user.id !== action.payload);
        },
        updateUsuario:(state, action)=> {
            state.usuarios = state.usuarios.map(u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload,
                    };
                }
                return u;
            })
        },
        loadingUsuario:(state, {payload}) => {
            state.usuarios = payload;
        },
        loadingError: (state, {payload})=> {
            state.errors = payload;
        }
    }
})

export const {
    agregarUsuario,
    removeUsuario,
    updateUsuario,
    loadingUsuario,
    loadingError
} = userSlice.actions;