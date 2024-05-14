import {useEffect, useState} from "react";
import {useProducto} from "../../hooks/useProducto.js";

export const ProductoResumen =({producto,cantidad})=> {
    const { comprarProductoBackend } = useProducto();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const cargarProducto = async (id) => {
            const productoCargado = await comprarProductoBackend(id);

            setProduct(productoCargado);
        };
        cargarProducto(producto);

    }, [producto]);
    
    return(
        <>
            <div  className="flex justify-between mb-2">
                <p>{product.nombre}</p>
                <p>{cantidad}</p>
            </div>
        </>
    )
}