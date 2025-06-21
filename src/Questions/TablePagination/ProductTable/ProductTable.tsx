/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

const ProductTable = ({ productData }: any) => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebounce(searchQuery, 1000);
  const [islowTohigh, setIsLowtoHigh] = useState(false);
  const handlePrevClick = () => {
    if (page === 0) return;
    setPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (page >= Math.floor(filteredData.length / 5)) return;
    setPage((prev) => prev + 1);
  };

  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  let filteredData = productData.filter((item: any) =>
    item.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  if (islowTohigh) {
    filteredData = filteredData.sort((a: any, b: any) => a.price - b.price);
  }

  const handleLowToHigh = () => {
    setIsLowtoHigh((prev) => !prev);
  };

  const paginatedData = filteredData.slice(page * 5, page * 5 + 5);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-full flex gap-2 items-center justify-center">
        <input
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search product..."
          className="border w-1/2 px-3 py-2 rounded-2xl"
        />
        <div>
          <button
            onClick={handleLowToHigh}
            className="border p-2 rounded-2xl bg-black text-white cursor-pointer"
          >
            low to high
          </button>
        </div>
      </div>

      <table className="w-1/2 border border-gray-300 mt-4 ">
        <thead className="bg-blue-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">price</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((product: any) => (
              <tr key={product.id}>
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.title}</td>
                <td className="border p-2">{product.description}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">{product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="w-1/2 flex items-center justify-between px-10 gap-10 mt-4">
        <button
          onClick={handlePrevClick}
          disabled={page === 0}
          className="border px-4 py-1 rounded-2xl bg-black text-white disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={page >= Math.floor(filteredData.length / 5)}
          className="border px-4 py-1 bg-black rounded-2xl text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
