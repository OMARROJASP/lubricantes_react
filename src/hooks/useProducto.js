import {useDispatch, useSelector} from "react-redux";
import {
    actualizarProductoBackend,
    guardarProducto, traerProductoByDescuento,
    traerProductoById,
    traerProductos
} from "../service/ProductoService.js";
import {
    actualizarProducto,
    agregarProducto,
    cargarProducto,
    filtrarProductos,
    filtrarProductosPorPrecio, onCerrarFormularioSelecionado,
    onSeleccionarFormulario
} from "../store/slices/producto/productoSlice.js";
import {traerByCategoria} from "../service/CategoriaService.js";

export const useProducto = ()=> {

    const {productos,selecionarFormulario }=
        useSelector(state => state.productos)


    const dispatch = useDispatch();

    const cargarProductosBackend = async (idCategoria)=> {
        const result = await traerProductos(idCategoria);
        dispatch(cargarProducto(result))
    }

    const cargarProductosByDescuentoBackend =async ()=> {
        const result = await traerProductoByDescuento();
        dispatch(cargarProducto(result))
    }

    const guardarProductoBackend = async (producto,idCategoria)=> {

        const  categoria = await traerByCategoria(idCategoria);
        let response;
        try{
            if(producto.id === 0){
                response = await guardarProducto(producto,categoria);
                dispatch(agregarProducto(response))
            }else{
                response = await actualizarProductoBackend(producto);
                dispatch(actualizarProducto(response))
            }
        }catch (e) {


            console.error(e);
        }

    }

    const filtrarProductosPorMarca = async (marca,idCategoria)=> {
        const result = await traerProductos(idCategoria);
        dispatch(cargarProducto(result))
        console.log(marca)
        dispatch(filtrarProductos(marca))
    }

    const filtrarProductosPorPrecios =  async (precios,idCategoria)=> {
        const result = await traerProductos(idCategoria);
        dispatch(cargarProducto(result))
        dispatch(filtrarProductosPorPrecio(precios))
    }

    const comprarProductoBackend = async (id)=> {
        const result = await traerProductoById(id);
        console.log(result)
        return result;
    }

    const cargarFormulario =(producto)=> {
        dispatch(onSeleccionarFormulario(producto))
    }

    const limpiarFormulario =()=> {
        dispatch(onCerrarFormularioSelecionado())
    }

    return{
        productos,
        selecionarFormulario,
        cargarProductosBackend,
        guardarProductoBackend,
        comprarProductoBackend,
        filtrarProductosPorMarca,
        filtrarProductosPorPrecios,
        cargarProductosByDescuentoBackend,
        cargarFormulario,
        limpiarFormulario
    }


}