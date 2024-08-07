import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center  gap-y-6 gap-x-12 border-t border-blue-gray-50 py-10 mt-24 text-center md:justify-between">
      <Typography color="blue-gray" className="font-bold font-playwrite-gb-s">
        &copy; 2024 BUSIFY
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
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-bold font-playwrite-gb-s transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-bold font-playwrite-gb-s transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
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