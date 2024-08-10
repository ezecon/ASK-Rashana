import { LuBadgeCheck } from "react-icons/lu";
import { GiForkKnifeSpoon } from "react-icons/gi";

export default function WhyUs() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice py-4  flex justify-center gap-2">
      <GiForkKnifeSpoon className="text-3xl text-[goldenrod]" /> Why us? <GiForkKnifeSpoon className="text-3xl text-[goldenrod]" />
      </h1>
      <div className="grid gap-4 montserrat-alternates-extralight my-5 grid-cols-1 sm:grid-cols-2 ">
        <div className="shadow-lg rounded-lg px-4 py-6 flex flex-col items-center text-center md:text-left md:items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex gap-3">
            <h2 className="font-bold text-[goldenrod] mt-2 flex gap-1"><LuBadgeCheck className="text-xl text-[goldenrod]" />Exquisite Taste</h2>
          </div>
          <p className="mt-2">
            <ol>
              <li>Premium Ingredients: Only the finest, freshest components.</li>
              <li>Skilled Craftsmanship: Expertly crafted by seasoned chefs.</li>
              <li>Innovative Flavors: Unique and exciting taste combinations.</li>
            </ol>
          </p>

        </div>
           <div className="shadow-lg rounded-lg px-4 py-6 flex flex-col items-center text-center md:text-left md:items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex gap-3">
            <h2 className="font-bold text-[goldenrod] mt-2 flex gap-1"><LuBadgeCheck className="text-xl text-[goldenrod]" />Reliable Delivery</h2>
          </div>
          <p className="mt-2">
            <ol>
              <li>Fast Shipping: Get your orders quickly and on time.</li>
              <li>Secure Packaging: Products arrive safely, maintaining quality.</li>
              <li>Real-time Tracking: Stay updated with real-time delivery status.</li>
            </ol>
          </p>

        </div>
      </div>
    </div>
  );
}
