import { useState } from "react";

interface toDoInterface {
  id: number;
  name: string;
}

const ToDoList = () => {
  const [todoes, setTodoes] = useState<toDoInterface[]>([]);
  const [todo, setTodo] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    setTodoes((prev) => {
      return [...prev, { id: Date.now(), name: todo }];
    });
    setTodo("");
  };
  const handleDelete = (id: number) => {
    const newTodo = todoes.filter((todo) => todo.id !== id);
    setTodoes(newTodo);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setTodoes((prev) => {
        return [...prev, { id: Date.now(), name: todo }];
      });
      setTodo("");
    }
  };
  const handleUpdate = (id: number) => {
    const getTodo = prompt("enter the todo");
    if (!getTodo) {
      return;
    }
    const updatedTodoes = todoes.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: getTodo };
      }
      return todo;
    });
    setTodoes(updatedTodoes);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* //add todo form */}
      <div className="w-1/3 flex">
        <input
          className="w-full"
          onKeyDown={handleKeyDown}
          value={todo}
          onChange={handleInputChange}
          placeholder="add your task"
          name="todo"
        ></input>
        <button onClick={handleAddTodo} className="cursor-pointer">
          add
        </button>
      </div>
      <div className="w-1/3 border mt-4">
        {todoes.map((todo) => {
          return (
            <div className="flex gap-2 justify-between w-full  ">
              <div className="w-full border px-3 py-1  "> {todo.name} </div>

              <div className=" flex gap-2">
                {" "}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="cursor-pointer text-red-700"
                >
                  delete
                </button>
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="cursor-pointer text-green-500"
                >
                  update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
