import { useState } from "react";

const FileExploral = ({ data ,setData}) => {
 
  const [isfolderOpen, setIsFolderOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleToggleFolder = (id: number) => {
    setIsFolderOpen((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };
  const handleDelete = (id: number) => {
    const newdata = data.filter((file) => file.id !== id);
    setData(newdata);
  };
  const addItem = (name: string, Id: number, isFolder: boolean) => {
    const newItem = {
      id: Date.now(),
      type: isFolder ? "folder" : "file",
      name: name,
      Children: isFolder ? [] : undefined,
    };

   const addItemToTree = (nodes: any[]): any[] => {
    return nodes.map((node) => {
      if (node.id === Id && node.type === "folder") {
        return {
          ...node,
          Children: [...(node.Children || []), newItem],
        };
      } else if (node.Children) {
        return {
          ...node,
          Children: addItemToTree(node.Children),
        };
      }
      return node;
    });
  };

    setData((prevData) => addItemToTree(prevData));
  };
  const handleAddFileFolder = (id) => {
    const name = prompt("Enter name:");
    const isFolder = true;
   return addItem(name || "", id, isFolder);
  };
  return (
    <div className="h-vh flex items-center justify-start">
      <div className="">
        {data.map((file) => {
          const isOpen = isfolderOpen[file.id] || false;
          return (
            <div className="flex">
              <button
                className="p-2 "
                onClick={() => handleToggleFolder(file.id)}
              >
                {isOpen ? "-" : "+"}
              </button>
              {file.name}
              <div className="flex">
                {" "}
                <button
                  onClick={() => handleDelete(file.id)}
                  className="ml-2 text-red-500"
                >
                  delete
                </button>
                <button
                  onClick={() => handleAddFileFolder(file.id)}
                  className="ml-2 text-red-500"
                >
                  add
                </button>
              </div>

              {file.Children && isOpen && (
                <div className="ml-3">
                  <FileExploral data={file.Children} setData={setData} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileExploral;
