import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "./Hook/useToken";

export default function Users() {
    const { token, removeToken } = useToken();
    const navigate = useNavigate();
    const {id} = useParams();
    const [userID, setUserID] = useState(id);
    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {
        const fetchUserInfo = async () => {
            if (userID) {
                try {
                    const response = await axios.get(`https://ask-rashana-server.vercel.app/api/users/${userID}`);
                    if (response.status === 200) {
                        const { _id, password, isVerified, verificationCode, __v, ...filteredData } = response.data;
                        setUserInfo(filteredData);
                    } else {
                        console.log(response.data);
                    }
                } catch (err) {
                    console.error('Error fetching user info:', err);
                }
            }
        };

        if (userID) {
            fetchUserInfo();
        }
    }, [userID]);

    const photoUrl = userInfo.photo || "https://via.placeholder.com/150";

    return (
        <div className="montserrat-alternates-light m-10 p-6 rounded-xl border bg-white shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                    <img 
                        className="rounded-xl shadow-md w-1/2  mb-4"
                        src={photoUrl}
                        alt="User Profile"
                    />
                    <button 
                        className="bg-goldenrod text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                        onClick={() => navigate('/update-profile')}
                    >
                        Update Profile
                    </button>
                </div>
                <div className="text-lg text-left space-y-4">
                    {Object.entries(userInfo).filter(([key]) => key !== 'photo').map(([key, value]) => (
                        <div key={key} className="text-gray-700">
                            <strong className="text-[goldenrod] capitalize">{key.replace(/([A-Z])/g, ' $1')}: </strong> 
                            {value || 'N/A'}
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    );
}
