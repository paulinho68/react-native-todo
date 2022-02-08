import React from 'react';
import { createContext, ReactNode, useContext, useState } from "react";

interface TasksProviderProps {
    children: ReactNode;
}

interface TaskProps {
    id: string,
    description: string;
    checked: false
}

interface TaskContextData {
    tasks: TaskProps[];
    addTask: (task: TaskProps) => void;
    removeTask: (id: string) => void;
    editTask: (checked: boolean, id: string) => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const addTask = (task: TaskProps) => {
        setTasks(tasksBefore => [task, ...tasksBefore]);
    }

    const removeTask = (id: string) => {
        setTasks(tasksBefore => tasksBefore.filter(task => task.id !== id));
    }

    const editTask = (checked: boolean, id: string) => {
        const editableTask = tasks.find(task => task.id === id);
        const indexPosition = tasks.findIndex(task => task.id === id);
        const newTask = {
            id: editableTask?.id,
            description: editableTask?.description,
            checked
        } as TaskProps;
        const newTasks = [...tasks.filter(task => task.id !== id)];
        newTasks.splice(indexPosition, 0, newTask);
        setTasks(newTasks);
    }

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, removeTask, editTask }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask(): TaskContextData {
    const context = useContext(TaskContext);

    return context;
}