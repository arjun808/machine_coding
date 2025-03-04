import { useEffect, useState } from "react";
import Card from "./Card";

const Pagination = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState<number>(1);
  const getProductData = async () => {
    const responce = await fetch("https://dummyjson.com/products?limit=100");

    const data = await responce.json();
    setProductData(data.products);
    console.log(data.products, "this is the project data");
  };
  useEffect(() => {
    getProductData();
  }, []);
  const handlePageChange = (index: number) => {
    setPage(index + 1);
  };
  const isOnFirstIndex = page === 1 ? true : false;
  const isOnLastIndex = productData.length / 10 === page ? true : false;
  return (
    <div>
      <h1 className="text-3xl text-center mb-3">Pagination Implimentaion</h1>

      <div className="mb-3 w-1/3 items-center m-auto h-[20%]  grid grid-cols-3 ">
        {productData.slice((page - 1) * 10, page * 10).map((item) => {
          return (
            <div key={item.id} className="mt-2  ">
              <Card namee={item.title} id={item.id} imageUrl={item.images[0]} />
              {/*               
               <span className="mr-2">{item.id}</span>
              {item.title} */}
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <button
          className="cursor-pointer"
          disabled={isOnFirstIndex}
          onClick={() => setPage(page - 1)}
        >
          ⬅️
        </button>
        {...Array(productData.length / 10)
          .fill("")
          .map((_, index) => (
            <span
              onClick={() => handlePageChange(index)}
              className={`p-1 cursor-pointer border text-3xl ${
                page === index + 1 ? "bg-blue-600" : ""
              }`}
            >
              {index + 1}
            </span>
          ))}
        <button
          disabled={isOnLastIndex}
          onClick={() => setPage(page + 1)}
          className="cursor-pointer"
        >
          ▶️
        </button>
      </div>
    </div>
  );
};
export default Pagination;
