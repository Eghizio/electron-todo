import { ReactNode, useState } from "react";
import { TodosContext } from "./TodosContext";
import { createTodo, Priority, Status, Todo } from "../model";
import { toast } from "sonner";
import { useDisclosure } from "../hooks/useDisclosure";

const exampleTodos: Todo[] = [
  { ...createTodo("Make an app for Mac to move all windows to second screen"), priority: Priority.HIGH },
  { ...createTodo("First todo"), priority: Priority.HIGH },
  { ...createTodo("Second todo"), done: true, },
  { ...createTodo("Third todo"), status: Status.IN_PROGRESS },
  { ...createTodo("Fourth todo here with very long name"), priority: Priority.LOW },
];

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(exampleTodos);
  const { isOpen: isDoneFilterEnabled, toggle: toggleDoneFilter } = useDisclosure(false);

  // const filteredTodos = todos.filter(({done}) => !isDoneFilterEnabled || !done);
  const filteredTodos = todos;

  const addTodo = (name: string) => {
    const todo = createTodo(name);
    setTodos(prev => [todo, ...prev]);
    toast.success("New item added.");
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(t => t.id !== id ? t : { ...t, done: !t.done }));
  };
  
  const editTodo = (todo: Todo) => {
    setTodos(prev => prev.map(t => t.id !== todo.id ? t : todo));
  };
  
  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
    toast.error("Item removed.");
  };

  const reorderTodos = (startIndex: number, endIndex: number) => {
    setTodos(prev => {
      const [removed] = prev.splice(startIndex, 1);
      prev.splice(endIndex, 0, removed);
      return prev;
    });
  };
  
  const value = {
    todos: filteredTodos,
    isDoneFilterEnabled,
    toggleDoneFilter,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
    reorderTodos,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
};
