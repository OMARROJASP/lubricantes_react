export const NotFoundMessage = ({ url }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        className="h-12 w-12 text-amber-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-amber-600 mb-2">
                    URL no encontrada
                </h2>
                <p className="text-gray-700">
                    La URL solicitada <span className="font-bold">{url}</span> no se
                    encuentra en esta aplicación.
                </p>
            </div>
        </div>
    );
};

