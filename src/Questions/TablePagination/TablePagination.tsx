import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

const TablePagination = () => {
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProductData(data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ProductTable productData={productData} />
    </div>
  );
};

export default TablePagination;
