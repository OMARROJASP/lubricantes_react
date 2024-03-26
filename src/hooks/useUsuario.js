import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/hooks/useAuth.js";
import {agregarUsuario, removeUsuario, updateUsuario} from "../store/slices/usuario/usuarioSlice.js";
import {remove, save, update} from "../service/UsuarioService.js";

export const useUsuario = ()=> {

    const {usuarios, usuarioSelecionado, errros} = useSelector(state => state.usuarios);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {login, handlerLogout} = useAuth();


    const handlerAddUser = async (usuario)=> {
        //if(!login.isAdmin) return;

        let response;

        try {
            if(usuario.id === 0){
                response = await save(usuario);
                console.log(response.data)
                dispatch(agregarUsuario(response.data));
            }else{
                response = await update(usuario);
                dispatch(updateUsuario(response.data));
            }

            navigate('/categorias')
        }catch (e) {
            console.log(e);
        }
    }

    const handlerRemoveUser = async (id) => {
        if(!login.isAdmin) return;

        try {
            await remove(id);
            dispatch(removeUsuario(id));

        }catch (error){
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    return {
        usuarios,
        usuarioSelecionado,
        errros,
        handlerAddUser,
        handlerRemoveUser
    }

}