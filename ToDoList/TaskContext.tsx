import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
  } from 'react';
  import { SafeAreaView, Text } from 'react-native';
  
  interface TaskContextProps {
    completedTasks: number;
    pendingTasks: number;
    updateTaskCount: (isChecked: boolean) => void;
  }
  
  interface TaskProviderProps {
    children: ReactNode;
  }
  
  const TaskContext = createContext<TaskContextProps | undefined>(undefined);
  
  export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [completedTasks, setCompletedTasks] = useState<number>(0);
    const [pendingTasks, setPendingTasks] = useState<number>(0);
  
    const updateTaskCount: TaskContextProps['updateTaskCount'] = (isChecked) => {
      if (isChecked) {
        setCompletedTasks((prevCount) => prevCount + 1);
        setPendingTasks((prevCount) => Math.max(0, prevCount - 1));
      } else {
        setCompletedTasks((prevCount) => Math.max(0, prevCount - 1));
        setPendingTasks((prevCount) => prevCount + 1);
      }
    };
  
    const contextValue: TaskContextProps = {
      completedTasks,
      pendingTasks,
      updateTaskCount,
    };
  
    return (
      <TaskContext.Provider value={contextValue}>
        <SafeAreaView>{children}</SafeAreaView>
      </TaskContext.Provider>
    );
  };
  
  export const useTaskContext = (): TaskContextProps => {
    const context = useContext(TaskContext);
  
    if (!context) {
      throw new Error('useTaskContext must be used within a TaskProvider');
    }
  
    return context;
  };
  