import { Ref, useReducer, useRef } from "react";

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
interface Todo {
  id: number;
  text: string;
}
const toDoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("Error");
  }
};
export default function useTodos(initialState: Todo[]): {
  inputRef: React.LegacyRef<HTMLInputElement>;
  todos: Todo[];
  handleAddTodo: () => void;
  handleRemoveTodo: (id: number) => void;
} {
  const [todos, dispatch] = useReducer(toDoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleRemoveTodo = (id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  const handleAddTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
    }
  };
  return {
    inputRef,
    todos,
    handleAddTodo,
    handleRemoveTodo,
  };
}
