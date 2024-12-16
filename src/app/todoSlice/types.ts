export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type IStatus = "all" | "active" | "completed";
