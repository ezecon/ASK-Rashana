import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdInventory2 } from "react-icons/md";

export function Products() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ask-rashana-server.vercel.app/api/products`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // Make sure to include an empty dependency array to avoid infinite re-renders

  return (
    <div className="py-10">
      <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice pt-20 flex justify-center gap-2">
        <MdInventory2 className="text-3xl text-[goldenrod]" /> Products{" "}
        <MdInventory2 className="text-3xl text-[goldenrod]" />
      </h1>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((item) => (
          <div
            key={item._id}
            className="shadow-lg rounded-xl p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                className="rounded-xl object-cover h-48 w-full transition duration-500 ease-in-out transform hover:scale-110"
                alt={item.name}
              />
            </div>
            <div className="text-left mt-5">
              <h1 className="font-playwrite-gb-s font-bold text-xl text-gray-800">
                {item.name}
              </h1>
              <p className="text-lg text-[goldenrod] mt-1">{item.price} টাকা</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button>See More</Button>
      </div>
    </div>
  );
}
