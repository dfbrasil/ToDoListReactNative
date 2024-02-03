import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface TaskContextProps {
  tasks: TaskProps[];
  completedTasks: number;
  pendingTasks: number;
  addNewTask: (task: { title: string; subtitle: string }) => void;
  removeTask: (id: number) => void;
  updateTask: (task: TaskProps) => void;
}

interface TaskProps {
  title: string;
  subtitle: string;
  active: boolean;
  id: number;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  completedTasks: 0,
  pendingTasks: 0,
  addNewTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
});

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [pendingTasks, setPendingTasks] = useState<number>(0);

  async function storeTasks(tasks: TaskProps[]) {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (err) {
      console.log(err);
    }
  }

  async function getTasks() {
    try {
      const tasks = await AsyncStorage.getItem("@tasks");
      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    } catch (err) {
      console.log(err);
    }
  }

  function addNewTask({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) {
    const newTask = {
      id: tasks.length,
      title,
      subtitle,
      active: false,
    };
    setTasks([...tasks, newTask]);
  }

  function removeTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function updateTask({ id, active }: { id: number; active: boolean }) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, active } : task))
    );
  }

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.active).length);
    setPendingTasks(tasks.length - completedTasks);
  }, [tasks, completedTasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        completedTasks,
        pendingTasks,
        addNewTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
