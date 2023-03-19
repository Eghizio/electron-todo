import { useState } from "react";
import { Todo } from "../../model";

export const useSettings = (todo: Todo) => {
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [done, setDone] = useState(todo.done);
  const [status, setStatus] = useState<string>(todo.status);
  const [priority, setPriority] = useState<string>(todo.priority);


  return {
    name, changeName: (name: string) => setName(name),
    description, changeDescription: (desc: string) => setDescription(desc),
    done, toggleDone: () => setDone(p => !p),
    status, markStatus: (status: string) => setStatus(status),
    priority, setPriority: (prio: string) => setPriority(prio),
  };
};