import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { TodosProvider } from "./context/TodosProvider";
import { Todo } from "./pages/Todo";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster closeButton richColors position="bottom-center"/>
    <TodosProvider>
      <Todo />
    </TodosProvider>
  </React.StrictMode>
);
