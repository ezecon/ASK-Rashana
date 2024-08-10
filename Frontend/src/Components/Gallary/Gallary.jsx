import { Carousel } from "@material-tailwind/react";
import { RiGalleryLine } from "react-icons/ri";
 
export function Gallary() {
  return (
   <div className="my-10">
    <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice py-10  flex justify-center gap-2">
     Gallery <RiGalleryLine className="text-3xl text-[goldenrod]" />
      </h1>
     <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/82/%E0%A6%86%E0%A6%AE%E0%A6%A1%E0%A6%BC%E0%A6%BE_%28Hog_Plum%29.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://cdn.britannica.com/05/75905-050-C7AE0733/Mangoes-tree.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://d2u0ktu8omkpf6.cloudfront.net/d56cf6317775956aa802cf9bc23eb28628b714000aecaf71.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
    
    </Carousel>
   </div>
  );
}