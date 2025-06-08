const PinterestLayout = () => {
  const heights = [40, 80, 120, 160, 200];
  const colors = [
    "bg-amber-200",
    "bg-amber-600",
    "bg-blue-500",
    "bg-orange-900",
    "bg-amber-700",
    "bg-cyan-950",
    "bg-emerald-800",
    "bg-purple-500",
    "bg-black",
    "bg-yellow-700",
    "bg-orange-700",
    "bg-sky-500",
  ];

  return (
    <div className="flex justify-center p-4 bg-gray-50 min-h-screen">
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
        {[...Array(20)].map((_, index) => {
          const height = heights[index % heights.length];
          const bgColor = colors[index % colors.length];

          return (
            <div
              key={index}
              className={`mb-4 ${bgColor} break-inside-avoid-column rounded-xl shadow-md text-white p-4 flex items-center justify-center text-xl font-semibold`}
              style={{ height }}
            >
              Pin {index + 1}
            </div>
          );
        })}
        1
      </div>
    </div>
  );
};

export default PinterestLayout;
