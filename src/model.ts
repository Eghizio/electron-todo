import { nanoid } from "nanoid";

export enum Status {
  TODO = "To do",
  IN_PROGRESS = "In progress",
  ARCHIVED = "Archived",
}

export enum Priority {
  LOW = "Low",
  NORMAL = "Normal",
  HIGH = "High",
}


export type Todo = {
  id: string;
  name: string;
  description: string;
  done: boolean;
  status: Status;
  priority: Priority;
};

export const createTodo = (name: string): Todo => ({
  id: nanoid(),
  name,
  description: "",
  done: false,
  status: Status.TODO,
  priority: Priority.NORMAL,
});