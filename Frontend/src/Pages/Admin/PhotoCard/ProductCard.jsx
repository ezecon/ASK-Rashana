import { IoMdOptions } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../../../Components/Hook/useToken";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";

export default function ProductCard({ data }) {
  const { _id, image, name, price } = data;
  const navigate = useNavigate();



  const hangleNavigate = (id)=>{
    navigate(`check-items/${id}`)
  }

  const handleDelete = async (id)=>{
    try{
      const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
      if(res.status===200){
        toast.success("Product Deleted")
      }
      else{
        toast.error("Something wents wrong")
      }

    }catch(err){
      console.log(err)
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
          onClick={()=>hangleNavigate(_id)}
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
         
            <Menu>
                  <MenuHandler>
                  <button className=" flex justify-center items-center gap-2 mt-4 bg-[goldenrod] text-white py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-yellow-600 font-playwrite-gb-s">
                  Details <IoMdOptions className="text-xl"/>
                  </button>
                  </MenuHandler>
          <MenuList>
            <Link to="/dashboard">
              <MenuItem>Update</MenuItem>
            </Link>
            <MenuItem onClick={()=>handleDelete(_id)}>Delete</MenuItem>
          </MenuList>
        </Menu>
        </div>
       
      </div>
    </div>
  );
}
