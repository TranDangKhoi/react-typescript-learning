export default function useTodos() {
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
}
