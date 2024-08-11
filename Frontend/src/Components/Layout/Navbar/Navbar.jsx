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
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { useToken } from "../../Hook/useToken";
import axios from "axios";

export function NavMenu() {
  const { token, removeToken } = useToken();
  const navigate = useNavigate();
  const [userID, setUserID] = useState([]);
  const [openNav, setOpenNav] = useState(false);
  const [userInfo, setUserInfo] = useState([]); // This should be managed based on actual authentication data

  
  useEffect(() => {
    const verifyToken = async () => {

      try {
        const response = await axios.post('https://ask-rashana-server.vercel.app/api/verifyToken', { token });
        if (response.status === 200 && response.data.valid) {
          setUserID(response.data.decoded.id);
        } else {
          removeToken();
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        removeToken();
      }
    };

    verifyToken();
  }, [token, navigate, removeToken]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userID) {
        try {
          const response = await axios.get(`https://ask-rashana-server.vercel.app/api/users/${userID}`);
          if (response.status === 200) {
            setUserInfo(response.data);
            console.log(userInfo.role)
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

     <Link to="products"><li><AiFillProduct className="text-2xl"/></li></Link> 
     <Link to="carts"> <li><FaOpencart className="text-2xl"/></li></Link>
    </ul>
  );

  const profile = userInfo && userInfo.photo ? (
    <Menu>
      <MenuHandler>
        <Avatar
          src={userInfo.photo}
          alt="avatar"
          withBorder={true}
          className="p-0.5 border-red-50"
        />
      </MenuHandler>
      <MenuList>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>
        <MenuItem onClick={removeToken}>Logout</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <>
      <Link to="/login">
        <Button variant="text" size="sm" className="hidden lg:inline-block text-white">
          <span>Log In</span>
        </Button>
      </Link>
      <Link to="/register">
        <Button variant="gradient" size="sm" className="hidden lg:inline-block check-button">
          <span>Sign In</span>
        </Button>
      </Link>
    </>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium playwrite-gb-s-regular"
        >
          <Link to="/" className="flex gap-2">
            <span className="text-[goldenrod] font-bold font-playwrite-gb-s">ASK RASHANA</span>
            <PiChefHatBold className="text-2xl text-[goldenrod]" />
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:flex items-center gap-x-1">
          {profile}
        </div>
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
          <div className="flex items-center gap-x-1">
            {profile}
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
