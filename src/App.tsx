import { ReactNode, useEffect, useReducer, useRef, useState } from "react";
import useTodos from "./hooks/useTodos";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary mb-5 font-bold text-2xl">{title}</h2>;
};

interface Data {
  id: number;
  text: string;
}

const products = [
  {
    id: 1,
    title: "Iphone 14",
    price: 2000,
    store: "ShopDunk",
  },
];

function App() {
  const [data, setData] = useState<Data | null>(null);
  const { inputRef, handleAddTodo, handleRemoveTodo, todos } = useTodos([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Heading title="To Do App"></Heading>
      <div className="max-w-sm">
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border border-slate-400 rounded-lg"
            ref={inputRef}
          />
          <button
            onClick={handleAddTodo}
            className="p-4 rounded-lg bg-blue-500 text-white text-center"
          >
            Add
          </button>
        </div>
        <RenderList
          items={products}
          render={(product) => (
            <div key={product.id} className="flex mt-2 items-center gap-x-3">
              <span>{product.title}</span>
              <button
                onClick={() => handleRemoveTodo(product.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          )}
        ></RenderList>

        {/* <div className="mt-5">
          {todos.map((todo) => (
            <div key={todo.id} className="flex mt-2 items-center gap-x-3">
              <span>{todo.text}</span>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

const RenderList = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => ReactNode;
}) => {
  return (
    <div className="flex mt-2 items-center gap-x-3">
      {items.map((item) => render(item))}
    </div>
  );
};
export default App;
