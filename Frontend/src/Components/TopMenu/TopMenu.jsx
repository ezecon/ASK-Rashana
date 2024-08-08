export default function TopMenu() {
    const data = [
      {
        Title: "চালতার আচার",
        Image: "https://i.ytimg.com/vi/j__3gr6ofZg/maxresdefault.jpg",
      },
      {
        Title: "আমের আচার",
        Image: "https://www.dailyjanakantha.com/media/imgAll//cloud-uploads/default/article-images/202105/1621336357_61.jpg",
      },
      {
        Title: "আমড়ার আচার",
        Image: "https://i.ytimg.com/vi/e3BAdXFzmNc/maxresdefault.jpg",
      },
      {
        Title: "রসুনের আচার",
        Image: "https://i.ytimg.com/vi/26dcIN301gc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCG1uOTF4Jo_fLbpG9_iSm9CvcRzw",
      },
      {
        Title: "তেতুলের আচার",
        Image: "https://www.salmathechef.com/fileadmin/recipes/tetulerachar/base.jpg",
      },
      {
        Title: "আমসত্ত্ব",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLo9lJbO0cR7V41ZzQ1IGpZYyKMrdz0O5ZsQ&s",
      },
    ];
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center py-7 text-[goldenrod] font-playwrite-gb-s ">Top Recipe</h1>
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
  