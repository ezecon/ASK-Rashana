import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
import axios from "axios"; // Import axios if not already imported
import { toast } from "react-hot-toast"; // Assuming you use react-hot-toast for notifications
import { useToken } from "../../../Components/Hook/useToken";

export function AdminNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null); // To store the selected file

  const handleOpen = () => setOpen(!open);
  const { token, removeToken } = useToken();
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);
  const [userInfo, setUserInfo] = useState([]); // This should be managed based on actual authentication data

  
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        removeToken();
        navigate('/login');
        return;
      }
      try {
        const response = await axios.post('https://ask-rashana-server.vercel.app/api/verifyToken', { token });
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

  const fetchAdmin = () => {
    if (userInfo.role !== "Admin") {
      navigate("/");
    }
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userID) {
        try {
          const response = await axios.get(`https://ask-rashana-server.vercel.app/api/users/${userID}`);
          if (response.status === 200) {
            setUserInfo(response.data);
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
      fetchAdmin()
    }
  }, [userID]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/admin/orders">
        <Tooltip className="p-3" content="Orders">
          <li>
            <MdBorderColor className="text-2xl" />
          </li>
        </Tooltip>
      </Link>
      <Link to="/admin">
        <Tooltip className="p-3" content="Products">
          <li>
            <AiFillProduct className="text-2xl" />
          </li>
        </Tooltip>
      </Link>
      <Tooltip className="p-3" content="Upload products">
        <li>
          <IoCloudUploadOutline onClick={handleOpen} className="text-2xl" />
        </li>
      </Tooltip>
    </ul>
  );

  const profile = userInfo ? (
    <Menu>
      <MenuHandler>
        <Avatar
          src={
            userInfo.photo
          }
          alt="avatar"
          withBorder={true}
          className="p-0.5 border-red-50"
        />
      </MenuHandler>
      <MenuList>
        <Link to="/admin/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={removeToken}>Logout</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <>
      <Link to="/login">
        <Button
          variant="text"
          size="sm"
          className="hidden lg:inline-block text-white"
        >
          <span>Log In</span>
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block check-button"
        >
          <span>Sign In</span>
        </Button>
      </Link>
    </>
  );

  // Function to handle the form submission
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("file", file); // Make sure this matches the multer field name

    try {
        const res = await axios.post(`https://ask-rashana-server.vercel.app/api/products`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (res.status === 200) {
            toast.success("Product uploaded successfully!");
            setOpen(false); // Close the dialog after a successful upload
        }
    } catch (err) {
        console.error("Axios Error: ", err);
        toast.error("Failed to upload product.");
    }
};

      
  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-black text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium playwrite-gb-s-regular"
          >
            <Link to="/" className="flex gap-2">
              <span className="text-[goldenrod] font-bold font-playwrite-gb-s">
                ASK RASHANA
              </span>
              <PiChefHatBold className="text-2xl text-[goldenrod]" />
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden lg:flex items-center gap-x-1">{profile}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">{profile}</div>
          </div>
        </MobileNav>
      </Navbar>
      <>
        <Dialog
          open={open}
          handler={handleOpen}
          className="flex flex-col justify-center items-center"
        >
          <DialogHeader>Upload Products</DialogHeader>
          <DialogBody>
            <form className="p-2" onSubmit={handleUpload} encType="multipart/form-data">
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="w-72 m-2">
                <Input
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="w-72 m-2">
                <Select
                  label="Select Category"
                  value={category}
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
              <Input type="file" name="file" accept=".jpg, .png" onChange={(e) => setFile(e.target.files[0])} />

              </div>
              <div className="w-72 m-2 flex justify-center items-center">
                <Button type="submit">Upload</Button>
              </div>
            </form>
          </DialogBody>
        </Dialog>
      </>
    </div>
  );
}
