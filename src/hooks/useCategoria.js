import {useDispatch, useSelector} from "react-redux";
import {
    actualizarCategoriaBackend, eliminarCategoriaBackend,
    guardarCategoria, traerByCategoria,
    traerCategorias
} from "../service/CategoriaService.js";
import {
    agregarCategoria,
    cargarCategoria,
    actualizarCategoria,
    eliminarCategoria,
    limpiarCategoria,
    onSeleccinarFormulario,
    onCerrarFormularioSeleccionado
} from "../store/slices/categoria/categoriaSlice.js";
import {useNavigate} from "react-router-dom";




export const useCategoria =()=>{

    const {
        categorias,
        seleccionarFormulario,
    } = useSelector(state => state.categorias);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cargarCategoriasBackend = async ()=> {
        const result = await traerCategorias();
        dispatch(cargarCategoria(result))
    }

    const limpiarCategoriasBackend= async ()=> {
        dispatch(limpiarCategoria(null))
        console.log(categorias)
        console.log("xd")
    }

    const cargarCategoriarById= async (id)=> {
        const  result = await traerByCategoria(id);
        return result;
    }

    const cargarCategoriaBackend = async ()=> {

    }

    const guardarCategoriaBackend = async (categoria)=> {
        let response;

        try{
            if(categoria.id===0){
                response = await guardarCategoria(categoria);
                dispatch(agregarCategoria(response))
            }else {
                response = await actualizarCategoriaBackend(categoria);
                dispatch(actualizarCategoria(response))
            }

            navigate(`/tienda`);
        }catch (e) {
            console.error(e)
        }



    }

    const eliminarCategoriaBack =async(id)=> {
        try{
           await eliminarCategoriaBackend(id);
            dispatch(eliminarCategoria(id))
        }catch (e) {
            console.error(e)
        }
    }

    const cargarFormulario = (categoria)=> {
        dispatch(onSeleccinarFormulario(categoria))
    }

    const cerrarFormulario = ()=> {
        dispatch(onCerrarFormularioSeleccionado())
    }


    return{
        categorias,
        seleccionarFormulario,
        cargarCategoriasBackend,
        cargarCategoriaBackend,
        guardarCategoriaBackend,
        limpiarCategoriasBackend,
        cargarCategoriarById,
        eliminarCategoriaBack,
        cargarFormulario,
        cerrarFormulario
    }



}