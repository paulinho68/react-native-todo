import React from 'react';
import { createContext, ReactNode, useContext, useState } from "react";

interface TasksProviderProps {
    children: ReactNode;
}

interface TaskProps {
    description: string;
    id: number
}

interface TaskContextData {
    tasks: TaskProps[];
    addTask: (task: TaskProps) => void;
    removeTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const addTask = (task: TaskProps) => {
        setTasks(tasksBefore => [...tasksBefore, task]);
    }

    const removeTask = (id: number) => {
        setTasks(tasksBefore => tasksBefore.filter(task => task.id !== id));
    }

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, removeTask }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask(): TaskContextData {
    const context = useContext(TaskContext);

    return context;
}