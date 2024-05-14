import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const IngresarDatosTarjeta =()=> {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
       // e.preventDefault();
        // Aquí puedes agregar la lógica para procesar el pago
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/tienda');
    };
    return(
        <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-amber-600">Información de Pago</h2>
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">
                        Número de Tarjeta
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                </div>
                <div className="flex mb-4">
                    <div className="w-1/2 mr-2">
                        <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">
                            Fecha de Expiración
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            placeholder="123"
                            className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="cardHolder" className="block text-gray-700 font-semibold mb-2">
                        Nombre del Titular
                    </label>
                    <input
                        type="text"
                        id="cardHolder"
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-amber-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300"
                >
                    Pagar
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">¡Gracias por su compra!</h2>
                        <p className="mb-4">Su pedido ha sido procesado con éxito.</p>
                        <button
                            className="bg-amber-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300"
                            onClick={handleCloseModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}