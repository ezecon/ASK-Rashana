import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const sharedClasses = {
  textPrimary: 'text-primary',
  textMutedForeground: 'text-muted-foreground',
  borderBorder: 'border-border',
  bgPrimary: 'bg-primary',
  bgSecondary: 'bg-secondary',
  textPrimaryForeground: 'text-primary-foreground',
  textSecondaryForeground: 'text-secondary-foreground',
  hoverPrimary: 'hover:bg-primary/80',
  hoverSecondary: 'hover:bg-secondary/80',
};

const CheckItem = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`https://ask-rashana-server.vercel.app/api/products/${id}`);
                if(res.status===200){
                    setData(res.data)
                    console.log(data)
                }
            }
            catch(err){
                console.log(err)
            }
        }
        if(id){
            fetchData();
        }
    })
  return (
    <div className="montserrat-alternates-nice flex flex-col md:flex-row bg-background p-6 rounded-lg shadow-lg">
      <div className="flex-1 flex items-center justify-center">
        <img src={data.image} alt="Gray Running Sneakers" className="object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>
      <div className="flex-1 p-6">
        <h2 className={`${sharedClasses.textPrimary} text-[goldenrod] text-2xl font-bold`}>{data.name}</h2>
       
        <p className={`${sharedClasses.textPrimary} text-xl font-semibold mt-4`}>${data.price}</p>
        <p className={`${sharedClasses.textMutedForeground} mt-2`}>{data.description}</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-muted-foreground">Amount</label>
          <select className="mt-1 block w-full border rounded-md p-2">
            <option>0.5</option>
            <option>1.0</option>
            <option>1.5</option>
            <option>2.0</option>
            <option>2.5</option>
            <option>3.0</option>
            <option>3.5</option>
            <option>4.0</option>
            <option>4.5</option>
            <option>5.0</option>
            <option>5.5</option>
            <option>6.0</option>
          </select>
        </div>

 
        <div className="flex items-center mt-4">
        <button className="btn-15"><span>Add to Cart</span></button>
         
        </div>

        <p className={`${sharedClasses.textMutedForeground}font-thin text-sm mt-4`}>Standard delivery in 2-4 days or Premium delivery in 2-4 hours.</p>
      </div>
    </div>
  );
};

export default CheckItem;
