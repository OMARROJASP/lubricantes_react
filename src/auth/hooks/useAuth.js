import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {onLogin, onLogout} from "../../store/slices/auth/authSlice..js";
import {loginUser} from "../service/AuthService.js";
import {useState} from "react";

export const useAuth =()=> {


    const dispatch = useDispatch();
    const {user, isAdmin, isAuth} = useSelector(state => state.auth);

    const navigate = useNavigate();

    const handlerLogin = async ({nombre, contrasena})=> {
        try{
            const response = await loginUser({nombre, contrasena});
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            console.log(claims);
            const user = {username: claims.sub}
            dispatch(onLogin({user, isAdmin: claims.isAdmin}));

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));
            console.log(user)
            console.log(isAdmin)
            console.log(isAuth)
            sessionStorage.setItem('token', `Bearer ${token}`);
            navigate('/tienda');
        } catch (error){
            if(error.response?.status == 401){
                console.log("Username o Password invalidos")
            }else if (error.response?.status == 403){
                console.log("No tiene acceso al recurso o permiso")
            }else {
                throw error;
            }
        }

    }

    const handlerLogout =()=>{
        dispatch(onLogout());
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('login')
        sessionStorage.clear();
    }
    return{
        login: {
            user,
            isAdmin,
            isAuth
        },
        handlerLogin,
        handlerLogout
    }

}