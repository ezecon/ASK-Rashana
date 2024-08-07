import { LuBadgeCheck } from "react-icons/lu";

export default function WhyUs() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice py-4 text-center">
        Why book with us?
      </h1>
      <div className="grid gap-4 montserrat-alternates-extralight my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="shadow-lg rounded-lg px-4 py-6 flex flex-col items-center text-center md:text-left md:items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex gap-3">
            <LuBadgeCheck className="text-3xl text-[goldenrod]" />
            <h2 className="font-bold text-[goldenrod] mt-2">Comfortable Bus</h2>
          </div>
          <p className="mt-2">
            We have very large leg space in between seats. You can spend 12 hours without any discomfort in our seats.
          </p>
        </div>
        <div className="shadow-lg rounded-lg px-4 py-6 flex flex-col items-center text-center md:text-left md:items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex gap-3">
        <LuBadgeCheck className="text-3xl text-[goldenrod]" />
          <h2 className="font-bold text-[goldenrod] mt-2">GPS Navigation</h2>
          </div>
          <p className="mt-2">
            All of our buses are equipped with GPS and Camera for the safety of the valued passenger.
          </p>
        </div>
        <div className="shadow-lg rounded-lg px-4 py-6 flex flex-col items-center text-center md:text-left md:items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex gap-3">
        <LuBadgeCheck className="text-3xl text-[goldenrod]" />
          <h2 className="font-bold text-[goldenrod] mt-2">Buy Tickets Easily</h2>
          </div>
          <p className="mt-2">
            You can buy tickets from our wide range of ticketing booths and online. You can book your seat through our call center +8809606188188.
          </p>
        </div>
        <div className="shadow-lg rounded-lg px-4 py-6 flex flex-col items-center text-center md:text-left md:items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex gap-3">
        <LuBadgeCheck className="text-3xl text-[goldenrod]" />
          <h2 className="font-bold text-[goldenrod] mt-2">Entertainment On Board</h2>
          </div>
          <p className="mt-2">
            Our buses are equipped with full HD Display and DVD player to play drama, music, and movies in order to make the journey more enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
}
