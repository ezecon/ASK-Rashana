import axios from "axios";
import { useEffect, useState } from "react";
import { MdBorderColor } from "react-icons/md";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function Orders() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://ask-rashana-server.vercel.app/api/order`);
        if (response.status === 200) {
          setData(response.data.reverse());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAcceptOrder = async (orderId) => {
    try {
      const response = await axios.put(`https://ask-rashana-server.vercel.app/api/order/${orderId}`, {
        status: 'Accepted'
      });
      if (response.status === 200) {
        setData(prevData => prevData.map(order => 
          order._id === orderId ? { ...order, status: 'Accepted' } : order
        ));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleItem = (id) => {
    navigate(`/item-check/${id}`); // Use backticks for template literals
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <PacmanLoader
          color="goldenrod"
          loading={loading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice pt-20 flex justify-center gap-2">
        Orders <MdBorderColor className="text-3xl text-[goldenrod]" />
      </h1>

      <div className="p-5">
        {data.map((order) => (
          <div key={order._id} className="mb-10 border-b-2 border-[goldenrod]">
            <h2 className="text-xl font-semibold mb-2">Order ID: {order._id}</h2>
            <button className=" border rounded-lg bg-[goldenrod] text-white px-2">User</button>
            <p className="text-sm text-gray-700">Total: ${order.total}</p>
            <p className="text-sm text-gray-700">Address: {order.address}</p>
            <p className="text-sm text-gray-700">Status: {order.status}</p>
            <p className="text-sm text-gray-700">Order Date: {new Date(order.date).toLocaleDateString()}</p>
            
         {order.status==="Pending" && 
            <button className="btn-31 m-5" onClick={() => handleAcceptOrder(order._id)}>
            <span className="text-container">
              <span className="text">Accept</span>
            </span>
          </button>}
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover mb-4"
                  />
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: Tk {item.price}</p>
                  <p className="text-sm text-gray-500">Amount: {item.amount}Kg</p>
                  <p className="text-sm text-gray-500">Item Date: {new Date(item.date).toLocaleDateString()}</p>
                  <button onClick={() => handleItem(item.productId)} className="btn-79 w-full">
                    <span>Check Item</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
