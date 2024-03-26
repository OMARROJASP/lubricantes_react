import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone,faTag,faUser,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faStore} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faXTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'


export const Footer =()=> {
    return(
        <footer>
           <div className={"bg-black flex justify-around items-center h-36 " }>
               <div className={"text-white text-xl"}>
                   <p className={"font-bold text-2xl"}>Suscríbete y recibe nuestros catálogos</p>
                   <span>promociones y recomendaciones <p className={"text-amber-400"}>directamente en tu e-mail!</p></span>
               </div>s
               <div>
                   <form>
                       <input
                           placeholder={"Ingresa tu correo electronico"}
                           className={"bg-white rounded-s-lg h-12 sm:w-52"}
                       />
                       <button className={"text-white bg-amber-500 h-12 px-10 hover:bg-amber-600 rounded-r-lg"}>
                            Enviar
                       </button>
                   </form>
               </div>
           </div>


            <div className={"bg-zinc-900 text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"}>

                <div className={"m-2"}>
                    <div >

                        <p className={"text-lg "}><FontAwesomeIcon icon={faPhone}/> Lima y Provincias</p>
                    </div>
                    <div>
                        <p className={"text-xl"}>(+51) 991117845</p>
                        <p className={"text-gray-400"}>De Lunes a Sabado de 8:00 AM a 8:00 PM</p>
                    </div>
                </div>

                <div className={"m-2"}>
                    <p className={"text-lg "}> <FontAwesomeIcon icon={faStore} className={""}/> Tienda -Lucanas</p>
                    <p>Av. El sol N° 1202, Lucanas, Lucanas - Ayacucho</p>
                </div>
                <div className={"m-2"}>
                    <p className={"text-lg "}><FontAwesomeIcon icon={faTag}/>  Enlaces Rápidos</p>
                    <div>
                        <p>Catálogo</p>
                        <p>Contacto</p>
                        <p>Términos y Combinaciones</p>
                        <p>Contacto</p>
                        <p>Politica de Cambios</p>
                    </div>
                </div>
                <div className={"m-2"}>
                    <p className={"text-lg "}> <FontAwesomeIcon icon={faUser}/> Clientes</p>
                    <div>
                        <p>Mi Cuenta</p>
                        <p>Mi Pedidos</p>
                        <p>Seguir mis Pedidos</p>
                    </div>
                </div>
                <div className={"m-2"}>
                    <p className={"text-lg "}><FontAwesomeIcon icon={faThumbsUp}/> Siguenos En</p>
                    <div className={"flex"}>
                        <p><FontAwesomeIcon className={"h-8 mx-2"} icon={faFacebook}/></p>
                        <p><FontAwesomeIcon className={"h-8  mx-2"} icon={faYoutube}/></p>
                        <p><FontAwesomeIcon className={"h-8  mx-2"} icon={faXTwitter}/></p>
                        <p><FontAwesomeIcon className={"h-8  mx-2"} icon={faInstagram}/></p>
                    </div>
                </div>


            </div>
        </footer>
    )
}