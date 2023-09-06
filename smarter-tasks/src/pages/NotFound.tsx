import { useNavigate } from "react-router-dom";

const Notfound = () => {
    const redirect = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg">
                <h1 className="text-4xl text-red-500 font-bold mb-2">404</h1>
                <p className="text-lg text-gray-700 mb-4">Page Not Found</p>
                <p className="text-gray-600 mb-4">
                    Sorry, the page you are looking for does not exist.
                </p>
                <button
                    onClick={() => redirect('/home')}
                    className="text-blue-500 hover:underline focus:outline-none focus:ring focus:ring-blue-300 transition"
                >
                    Go back to the homepage
                </button>
            </div>
        </div>
    );
};

export default Notfound;
