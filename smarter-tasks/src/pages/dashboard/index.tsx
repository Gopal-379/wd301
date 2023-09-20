import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


const Dashboard: React.FC = () => {
    const [userDataStr] = useState(() => {
        const userDataStr = window.localStorage.getItem("userData");
        if (userDataStr && userDataStr !== 'undefined') {
            return JSON.parse(userDataStr);
        }
        return null;
    });
    const navigate = useNavigate();
    if (!userDataStr) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    User Data Not Found
                </h1>
            </div>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("authToken");
        navigate('/signin');
    };
    return (
        <div className="min-h-screen items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 pt-6">Dashboard</h1>
            <button id='logout-link' onClick={handleLogout} className='m-6 text-white px-4 bg-gray-700 hover:bg-gray-800text-white font-semibold py-2  rounded-md focus:outline-none focus:shadow-outline-gray '>Logout</button>
            <h2 id='name' className="text-xl  text-center text-gray-800 mb-8">Welcome, {userDataStr.name}</h2>
            <p id='email ID' className="text-xl  text-center text-gray-800 mb-8">Email: {userDataStr.email}</p>
        </div>
    );
};

export default Dashboard