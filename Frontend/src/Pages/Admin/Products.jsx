
import axios from "axios";
import { useEffect, useState } from "react";
import { MdInventory2 } from "react-icons/md";
import PacmanLoader from "react-spinners/PacmanLoader";
import ProductCard from "./PhotoCard/ProductCard";

export function ProductsAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://ask-rashana-server.vercel.app/api/products`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
      
    };
    fetchData();
  }, []); // Make sure to include an empty dependency array to avoid infinite re-renders

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
        <MdInventory2 className="text-3xl text-[goldenrod]" /> Products{" "}
        <MdInventory2 className="text-3xl text-[goldenrod]" />
      </h1>

        <div>
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.map((product) => (
              <ProductCard key={product._id} data={product} />
            ))}
          </div>
        </div>
      
    </div>
  );
}
