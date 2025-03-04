import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

function AutoSearch() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 700);
  const [result, setResult] = useState<any[]>([]);
  const [cache, setCache] = useState<{ [key: string]: any[] }>({});

  const fetchData = async () => {
    if (cache[debouncedSearch]) {
      console.log("froin cacghe");
      setResult(cache[debouncedSearch]);
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${debouncedSearch}`
    );
    const json = await response.json();
    console.log(json.recipes);
    setResult(json.recipes);
    // setCache((prevCache) => ({
    //   ...prevCache,
    //   [debouncedSearch]: json.recipes,
    // }));
    setCache((prev) => {
      return {
        ...prev,
        [debouncedSearch]: json.recipes,
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, [debouncedSearch]);

  return (
    <div className="h-svh w-full flex items-center justify-center">
      <div>
        <div className="flex">
          <input
            className="w-80 border p-1"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div className="border max-h-96 overflow-y-auto">
          {!result.length ? (
            <div className="p-3 text-center">No result found</div>
          ) : (
            result.map((item: any) => (
              <div className="hover:bg-amber-200 p-3" key={item.id}>
                {item.name}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AutoSearch;
