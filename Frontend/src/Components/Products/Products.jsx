import { Button } from "@material-tailwind/react";
import { MdInventory2 } from "react-icons/md";
export function Products() {
  const data = [
    {
      name: '',
      img: '',
      price:'',
    }
  ]
  return (
   <div className="py-10">
        <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice pt-20 flex justify-center gap-2">
            <MdInventory2 className="text-3xl text-[goldenrod]" /> Products <MdInventory2 className="text-3xl text-[goldenrod]" />
        </h1>
        <div className="p-5 grid grid-cols-3 gap-3">
           
            <div className="shadow-xl rounded-xl p-4">
              <img src="https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg" className="rounded-xl my-5" alt="" />
              <div className="text-left">
                <h1 className="font-playwrite-gb-s font-bold text-xl">আচার</h1>
                <p className="text-sm text-[goldenrod]">১২টাকা</p>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
              <img src="https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg" className="rounded-xl my-5" alt="" />
              <div className="text-left">
                <h1 className="font-playwrite-gb-s font-bold text-xl">আচার</h1>
                <p className="text-sm text-[goldenrod]">১২টাকা</p>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
              <img src="https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg" className="rounded-xl my-5" alt="" />
              <div className="text-left">
                <h1 className="font-playwrite-gb-s font-bold text-xl">আচার</h1>
                <p className="text-sm text-[goldenrod]">১২টাকা</p>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
              <img src="https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg" className="rounded-xl my-5" alt="" />
              <div className="text-left">
                <h1 className="font-playwrite-gb-s font-bold text-xl">আচার</h1>
                <p className="text-sm text-[goldenrod]">১২টাকা</p>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
              <img src="https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg" className="rounded-xl my-5" alt="" />
              <div className="text-left">
                <h1 className="font-playwrite-gb-s font-bold text-xl">আচার</h1>
                <p className="text-sm text-[goldenrod]">১২টাকা</p>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
              <img src="https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg" className="rounded-xl my-5" alt="" />
              <div className="text-left">
                <h1 className="font-playwrite-gb-s font-bold text-xl">আচার</h1>
                <p className="text-sm text-[goldenrod]">১২টাকা</p>
              </div>
            </div>
        </div>
        <Button>See More</Button>
   </div>
  );
}