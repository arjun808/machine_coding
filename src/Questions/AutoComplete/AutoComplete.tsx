import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const AutoComplete = () => {
  const [recipeName, setRecipeName] = useState<string>("");
  const [searchRecipe, setSearchRecipe] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [debouncedValue] = useDebounce(recipeName, 1000);

  const getData = async () => {
    setLoading(true);
    try {
      console.log("call");
      const response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${recipeName}`
      );
      setLoading(false);
      setSearchRecipe(response.data.recipes);
    } catch (err) {
      console.log(err);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getData();
  }, [debouncedValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeName(e.target.value);
  };
  return (
    <div className="flex items-center flex-col justify-center h-[90vh]">
      <div className="w-1/2">
        <input
          value={recipeName}
          placeholder="search recipes"
          onChange={handleInputChange}
          className="shadow-lg rounded-full w-full p-2"
        ></input>
      </div>

      <div className="shadow-lg p-2 w-1/2 flex gap-4 flex-col  rounded-2xl  h-1/3 overflow-scroll">
        {loading && (
          <div className="flex items-center justify-center h-full">
            Loading...
          </div>
        )}
        {!loading &&
          searchRecipe.map((recipe) => {
            const name = recipe.name;
            const lowerName = name.toLowerCase();
            const lowerSearch = debouncedValue.toLowerCase();

            const startIndex = lowerName.indexOf(lowerSearch);
            const endIndex = startIndex + debouncedValue.length;

            if (startIndex === -1) {
              return <div key={recipe.id}>{name}</div>;
            }

            return (
              <div key={recipe.id}>
                {name.slice(0, startIndex)}
                <span className="bg-yellow-300 font-semibold">
                  {name.slice(startIndex, endIndex)}
                </span>
                {name.slice(endIndex)}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AutoComplete;
