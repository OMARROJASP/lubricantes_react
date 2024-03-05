export const Navbar =()=> {

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
                  <div className="text-white mr-4">OFERTAS</div>
                  <div className="text-white">CATEGORIAS</div>

              </div>
                <div>
                    <div className=" flex text-white mr-4">OMAR</div>
                </div>

            </div>
        </nav>


    )
}
//      <FaSearch className="text-gray-400 mr-2" /> {/* Icono de búsqueda */}