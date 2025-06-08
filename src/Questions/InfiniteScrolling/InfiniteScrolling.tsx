import { useState } from "react";

const InfiniteScrolling = ({ list, height, itemHeight }) => {
  const [index, setIndex] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    if (newStartIndex !== index[0] || newEndIndex !== index[1]) {
      setIndex([newStartIndex, newEndIndex]);
    }
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${height}px`,
        overflowY: "auto",
        fontSize: "2rem",
        color: "#333",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          height: `${list.length * itemHeight}px`,
          position: "relative",
        }}
      >
        {list.slice(index[0], index[1]).map((item, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: (index[0] + i) * itemHeight,
              height: `${itemHeight}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              left: 0,
              right: 0,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrolling;
