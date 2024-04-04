export const DetalleCompraProducto=({pedido,producto,cantidad,precioUnitario,subTotal}) => {

    return(
        <>
            <div className={"bg-white border-4 m-4 rounded-xl p-2 "}>
                <p>Id del pedido: {pedido}</p>
                <p>Id del producto: {producto}</p>
                <p>Cantidad : {cantidad}</p>
                <p>Precio Unitario : {precioUnitario}</p>
                <p>Total : {subTotal}</p>
            </div>
        </>
    )
}