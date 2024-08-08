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
        src="https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="https://images.unsplash.com/photo-1590951360207-317cb18098b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="https://images.unsplash.com/photo-1565642899687-1c332fb7dc65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="https://images.unsplash.com/photo-1557223563-8db8e5e7d90b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://images.unsplash.com/photo-1557223563-8db8e5e7d90b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
    </Carousel>
   </div>
  );
}