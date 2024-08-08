

export default function ProductCard() {
  return (
    <div>
        <div
            key={item._id}
            className="shadow-lg rounded-xl p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                className="rounded-xl object-cover h-48 w-full transition duration-500 ease-in-out transform hover:scale-110"
                alt={item.name}
              />
            </div>
            <div className="text-left mt-5">
              <h1 className="font-playwrite-gb-s font-bold text-xl text-gray-800">
                {item.name}
              </h1>
              <p className="text-lg text-[goldenrod] mt-1">{item.price} টাকা</p>
            </div>
          </div>
    </div>
  )
}
