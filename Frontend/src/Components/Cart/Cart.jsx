import { FaOpencart } from "react-icons/fa";
import { useToken } from "../Hook/useToken";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const { token, removeToken } = useToken();
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);
  const [data, setData] = useState([]);
  
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

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/carts/${userID}`);
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (userID) {
      fetchCarts();
    }
  }, [userID]); // Added userID as a dependency to refetch when it changes

  // Calculate the total price
  const totalPrice = data.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice pt-20 flex justify-center gap-2">
        CART{" "}
        <FaOpencart className="text-3xl text-[goldenrod]" />
      </h1>
      <div>
        <div className="border border-[goldenrod] rounded-xl m-5 p-10">
          <h2 className="font-bold text-[goldenrod] font-playwrite-gb-s">Items:</h2>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item._id} className="underline-offset-1 p-4 border-b border-gray-300">
                <img src={item.image} className="w-6 rounded-md" alt="" />
              <p className="text-lg font-semibold text-gray-700">
                Product Name: <span className="text-black">{item.name}</span>
              </p>
              <p className="text-md text-gray-600">
                Amount: <span className="font-medium">{item.price} Kg</span>
              </p>
              <p className="text-md text-gray-600">
                Price: <span className="font-medium text-black">BDT {item.price}</span>
              </p>
            </div>

            ))
          ) : (
            <p>No items in the cart.</p>
          )}
          <div className="text-right text-md font-bold font-playwrite-gb-s">
            Total: BDT {totalPrice}
          </div>
          <button className="btn-15"><span>Check Out</span></button>
        </div>
      </div>
    </div>
  );
}
