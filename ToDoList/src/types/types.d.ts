declare module '*.png'

export interface Task {
  id: number;
  title: string;
  subtitle: string;
};

export type TabParamList = {
    Dashboard: undefined;
    Home: { tasks: Task[] };
    NewTask: undefined;
};