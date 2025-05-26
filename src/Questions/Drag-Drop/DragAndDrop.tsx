import { useRef, useState } from "react";
import { DragAndDropConfig } from "./dragAndDrop.config";

interface DragItem {
  id: string;
  content: string;
}

type ItemsMap = {
  [key: string]: DragItem[];
};

const DragAndDrop = () => {
  const [items, setItems] = useState<ItemsMap>(DragAndDropConfig);

  const draggedItem = useRef<DragItem | null>(null);
  const sourceKey = useRef<string>("");

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    item: DragItem,
    key: string
  ) => {
    draggedItem.current = item;
    sourceKey.current = key;
    event.currentTarget.classList.add("opacity-50", "scale-95");
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetKey: string
  ) => {
    event.preventDefault();

    const currentItem = draggedItem.current;
    const fromKey = sourceKey.current;

    if (!currentItem || fromKey === targetKey) return;

    const sourceItems = items[fromKey].filter(
      (i) => i.id !== currentItem.id
    );
    const destinationItems = [...items[targetKey], currentItem];

    setItems((prev) => ({
      ...prev,
      [fromKey]: sourceItems,
      [targetKey]: destinationItems,
    }));

    draggedItem.current = null;
    sourceKey.current = "";
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove("opacity-50", "scale-95");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        ✨ My Beautiful Task Board
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.keys(items).map((key) => (
          <div
            key={key}
            className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-700 capitalize mb-6 border-b pb-2">
              {key.replace(/([A-Z])/g, " $1")}
            </h2>
            <div
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, key)}
              className="min-h-[150px] space-y-4"
            >
              {items[key].map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, item, key)}
                  onDragEnd={handleDragEnd}
                  className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-grab border border-gray-100"
                >
                  <span className="text-gray-800 font-medium">{item.content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
