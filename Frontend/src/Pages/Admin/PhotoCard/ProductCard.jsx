import { Button, Dialog, DialogBody, DialogHeader, Input, Menu, MenuHandler, MenuItem, MenuList, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdOptions } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function ProductCard({ data }) {
  const { _id, image, name, price, description, category } = data;
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState(name);
  const [productDescription, setDescription] = useState(description);
  const [productPrice, setPrice] = useState(price);
  const [productCategory, setCategory] = useState(category);
  const [file, setFile] = useState(null);

  const handleOpen = () => {
    // Pre-fill the form with existing data
    setProductName(name);
    setDescription(description);
    setPrice(price);
    setCategory(category);
    setOpen(!open);
  };

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`check-items/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://ask-rashana-server.vercel.app/api/products/${id}`);
      if (res.status === 200) {
        toast.success("Product Deleted");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("category", productCategory);
    if (file) {
      formData.append("file", file);
    }

    try {
      const res = await axios.put(`https://ask-rashana-server.vercel.app/api/products/${_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        toast.success("Product updated successfully!");
        setOpen(false); // Close the dialog after a successful update
      }
    } catch (err) {
      console.error("Axios Error: ", err);
      toast.error("Failed to update product.");
    }
  };

  return (
    <div>
      <div
        key={_id}
        className="shadow-lg rounded-xl p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            onClick={() => handleNavigate(_id)}
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
              <button className="flex justify-center items-center gap-2 mt-4 bg-[goldenrod] text-white py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-yellow-600 font-playwrite-gb-s">
                Details <IoMdOptions className="text-xl" />
              </button>
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={handleOpen}>Update</MenuItem>
              <MenuItem onClick={() => handleDelete(_id)}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        className="flex flex-col justify-center items-center"
      >
        <DialogHeader>Update Product</DialogHeader>
        <DialogBody>
          <form className="p-2" onSubmit={handleUpdate} encType="multipart/form-data">
            <div className="w-72 m-2">
              <Input
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="w-72 m-2">
              <Input
                label="Description"
                value={productDescription}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="w-72 m-2">
              <Input
                label="Price"
                value={productPrice}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="w-72 m-2">
              <Select
                label="Select Category"
                value={productCategory}
                onChange={(e) => setCategory(e)}
                required
              >
                <Option value="টক">টক</Option>
                <Option value="ঝাল">ঝাল</Option>
                <Option value="মিস্টি">মিস্টি</Option>
                <Option value="নোনতা">নোনতা</Option>
              </Select>
            </div>
            <div className="w-72 m-2">
              <Input
                type="file"
                name="file"
                accept=".jpg, .png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="w-72 m-2 flex justify-center items-center">
              <Button type="submit">Update</Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
}
