import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/hooks/useAuth.js";



export const Navbar =()=> {
    const { login, handlerLogout } = useAuth();
    const navigate = useNavigate()
    const verOfertas =()=> {
        navigate("/ofertas")
    }

    return(
        <nav className={"bg-black grid grid-cols-4 py-4 px-6"}>
            <div className={""}>
                <p className={"text-white text-4xl"}><span className={"text-amber-400"}>RUKA</span>NAS</p>
            </div>
            <div className={""}>
                <div className="flex items-center bg-white text-black rounded py-2 px-4 focus:outline-none">

                                 <input
                                     className="form-control w-96 bg-transparent focus:outline-none"
                                     type="search"
                                     placeholder="Search "
                                     aria-label="Search"
                                 />
                             </div>
            </div>
            <div className={"flex justify-between col-span-2 items-center mx-2"}>

              <div className={"flex "}>
                  <div className="text-white mr-4">CATEGORIAS</div>
                  <button className="text-white" onClick={verOfertas}>OFERTAS</button>

              </div>
                <div className={"flex relative"}>
                    <div className="flex text-white mr-2">{login.user?.username || (<p>Iniciar Sesion</p>)}</div>
                    <div className="relative">
                        <p className={"absolute -top-2 -right-2 bg-white rounded-full text-black w-4 h-4 flex justify-center items-center"}>1</p>
                        <p><FontAwesomeIcon className={"h-6 text-white"} icon={faCartPlus}/></p>
                    </div>
                </div>


            </div>
        </nav>


    )
}
//      <FaSearch className="text-gray-400 mr-2" /> {/* Icono de búsqueda */}