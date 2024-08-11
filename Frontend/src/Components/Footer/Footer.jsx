import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center  gap-y-6 gap-x-12 border-t border-blue-gray-50 py-10 mt-24 text-center md:justify-between">
      <Typography color="blue-gray" className="font-bold font-playwrite-gb-s">
        &copy; 2024 ASK RASHANA
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-bold font-playwrite-gb-s transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
         <Link to="/developer"> 
         <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-bold font-playwrite-gb-s transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Developer
          </Typography></Link>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-bold font-playwrite-gb-s transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}