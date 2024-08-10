
import { FaOpencart } from "react-icons/fa";
import { useToken } from "../Hook/useToken";
import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data }) {
  const { _id, image, name, price } = data;
  const { token, removeToken } = useToken();
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);

  
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        removeToken();
        navigate('/login');
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/api/verifyToken', { token });
        if (response.status === 200 && response.data.valid) {
          setUserID(response.data.decoded.id);
        } else {
          removeToken();
          navigate('/login');
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        removeToken();
        navigate('/login');
      }
    };

    verifyToken();
  }, [token, navigate, removeToken]);



  const handleCart=async()=>{
    try{
      const response = await axios.post( `http://localhost:3000/api/carts`,{
        name: name,
        productId: _id,
        image: image,
        price: price,
        userId: userID
      })
      if(response.status===200){
        toast.success("Added to Cart!")
      }
      else{
        toast.error("Something wents wrong!")
      }

    }catch(error){
      console.log(error)
      toast.error("Something wents wrong!")
    }
  }
  return (
    <div>
      <div
        key={_id}
        className="shadow-lg rounded-xl p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            className="rounded-xl object-cover h-48 w-full transition duration-500 ease-in-out transform hover:scale-110"
            alt={name}
          />
        </div>
        <div className="text-left mt-5">
          <h1 className="font-playwrite-gb-s font-bold text-xl text-gray-800 hover:text-[goldenrod] transition duration-300">
            {name}
          </h1>
          <p className="montserrat-alternates-nice text-sm text-[goldenrod] mt-1">{price} টাকা</p>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={handleCart} className=" flex justify-center items-center gap-2 mt-4 bg-[goldenrod] text-white py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-yellow-600 font-playwrite-gb-s">
          Add to Cart <FaOpencart className="text-xl"/>
        </button>
        </div>
       
      </div>
    </div>
  );
}
