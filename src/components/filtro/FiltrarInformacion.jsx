import {useProducto} from "../../hooks/useProducto.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {FiltrarPorMarca} from "./FiltrarPorMarca.jsx";
import {traerProductos} from "../../service/ProductoService.js";
import {FiltrarPorPrecio} from "./FiltrarPorPrecio.jsx";

export const FiltrarInformacion =()=> {

    const { cargarProductosBackend } = useProducto();
    const {idCategoria} = useParams();
    const [marcas, setMarcas] = useState([])
    const [listProductos, setListProductos] = useState([])
    const [precioMinimo,setPrecioMinimo] = useState(0);
    const [precioMaximo,setPrecioMaximo] = useState(0);
    const cargarInformacionParaFiltros = async () => {
        const productos = await traerProductos(idCategoria);
        setListProductos({productos})

        const marcasUnicas = new Set();
        const precios = new Set();

        productos.forEach((p) => {
            marcasUnicas.add(p.marca);
            precios.add(p.precio);
        });
        setMarcas(Array.from(marcasUnicas));

        setPrecioMinimo(Math.min(...precios))
        setPrecioMaximo(Math.max(...precios))
    };

    useEffect(() => {
        cargarProductosBackend(idCategoria).then(() => {
            cargarInformacionParaFiltros();
        });
    }, []);




    return(
        <>
            <div className={"grid grid-rows-2 gap-4"}>
                <div>
                    {
                        listProductos.length === 0 ? (
                                <FiltrarPorPrecio
                                    minimo={0}
                                    maximo={0}
                                />
                        ):
                            (
                                <FiltrarPorPrecio
                                    minimo={precioMinimo}
                                    maximo={precioMaximo}
                                />
                            )
                    }


                </div>
                <div className={"grid grid-rows-2"}>
                    <div>
                        <p className={"font-bold"}>Filtrar por Marca</p>
                    </div>

                    <div >
                        <FiltrarPorMarca
                            marcas={marcas}
                            product={listProductos}
                            idCategoria={idCategoria}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

/*
marcas.map(m =>
                                <FiltrarPorMarca
                                    key={m}
                                    product={m}
                                    category={idCategoria}

                                />)
 */