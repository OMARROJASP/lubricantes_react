import {createSlice} from "@reduxjs/toolkit";

export const formularioVacioProducto = {
    id: 0,
    imagen:"",
    categoria: "",
    nombre: "",
    cantidad: "",
    precio:"",
    descuento:null

}

export const productoSlice = createSlice({
    name: "productos",
    initialState: {
        productos:[],
        selecionarFormulario: formularioVacioProducto
    },
    reducers:{
        agregarProducto:(state, action)=> {
            state.productos = [
                ...state.productos,
                {
                    ...action.payload,
                }
            ];

        },
        eliminarProducto:(state, action)=> {
            state.productos = state.productos.filter(n => (n.id !== action.payload));
        },
        cargarProducto:(state,action)=> {
            state.productos = action.payload;
        },
        actualizarProducto:(state,action)=>{
            state.productos = state.productos.map(u=> {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    };
                }
                return u;
            })
        },
        filtrarProductos: (state, action) => {
            const productosFiltrados = state.productos.filter(producto => {
                return action.payload.some(marca => producto.marca.toLowerCase().includes(marca.toLowerCase()));
            });

            return {
                ...state,
                productos: productosFiltrados,
            };
        },
        filtrarProductosPorPrecio: (state, action) => {
            const productosFiltrados = state.productos.filter(producto => {
                return producto.precio >= action.payload[0] &&
                    producto.precio <= action.payload[1];
            });

            return {
                ...state,
                productos: productosFiltrados
            };
        },

        onSeleccionarFormulario:(state, {payload}) => {
            state.selecionarFormulario = payload;
        },
        onCerrarFormularioSelecionado:(state)=> {
            state.selecionarFormulario = formularioVacioProducto;
        }
    }
})

export const {
    agregarProducto,
    eliminarProducto,
    cargarProducto,
    actualizarProducto,
    filtrarProductos,
    filtrarProductosPorPrecio,
    onCerrarFormularioSelecionado,
    onSeleccionarFormulario
} = productoSlice.actions