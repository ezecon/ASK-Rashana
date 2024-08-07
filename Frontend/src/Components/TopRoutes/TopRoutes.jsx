export default function TopRoutes() {
    const data = [
      {
        Title: "Dhaka - Cox's Bazar",
        Image: "6.jpg",
      },
      {
        Title: "Noakhali - Dhaka",
        Image: "7.jpg",
      },
      {
        Title: "Dhaka - Noakhali",
        Image: "8.jpg",
      },
      {
        Title: "Cox's Bazar - Dhaka",
        Image: "9.jpg",
      },
      {
        Title: "Dhaka - Chittagong",
        Image: "10.jpg",
      },
      {
        Title: "Chittagong - Dhaka",
        Image: "11.jpg",
      },
    ];
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center py-7 text-[goldenrod] font-playwrite-gb-s ">Top Routes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="shadow-lg rounded-xl p-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={item.Image} className="rounded-lg w-full h-48 object-cover" alt={item.Title} />
              <p className="text-lg text-[goldenrod] font-playwrite-gb-s p-1 text-center">{item.Title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  