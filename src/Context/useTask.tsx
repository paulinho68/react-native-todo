import React, { useCallback } from 'react';
import { createContext, ReactNode, useContext, useState } from "react";
import AwesomeAlert from 'react-native-awesome-alerts';
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
    editTask: (checked: boolean, id: string, description?: string) => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
    const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);
    const [idTask, setIdTask] = useState('');

    const addTask = useCallback((task: TaskProps) => {
        const existTask = Boolean(tasks.find(t => t.description.toLowerCase() === task.description.toLowerCase()))
        if (existTask) {
            setShowAlertMessage(true);
        } else {
            setTasks(tasksBefore => [task, ...tasksBefore]);
        }
    }, [tasks]);

    const removeTask = useCallback((id: string) => {
        setIdTask(id);
        setShowAlertDialog(true);
    }, [])

    const editTask = useCallback((checked: boolean, id: string, description?: string) => {
        const editableTask = tasks.find(task => task.id === id);
        const indexPosition = tasks.findIndex(task => task.id === id);
        const newTask = {
            id: editableTask?.id,
            description: description ? description : editableTask?.description,
            checked
        } as TaskProps;
        const newTasks = [...tasks.filter(task => task.id !== id)];
        newTasks.splice(indexPosition, 0, newTask);
        setTasks(newTasks);
    }, [tasks]);


    return (
        <TaskContext.Provider
            value={{ tasks, addTask, removeTask, editTask }}
        >
            <AwesomeAlert
                show={showAlertDialog}
                showProgress={false}
                title="Atenção!"
                message="Deseja deletar esta tarefa?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={true}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancelar"
                confirmText="Confirmar"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlertDialog(false)
                }}
                onConfirmPressed={() => {
                    setTasks(tasksBefore => tasksBefore.filter(task => task.id !== idTask));
                    setShowAlertDialog(false);
                }}
            />
            <AwesomeAlert
                show={showAlertMessage}
                title="Atenção"
                message="Já existe uma tarefa com este nome"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Ok"
                onConfirmPressed={() => setShowAlertMessage(false)}
            />
            {children}
        </TaskContext.Provider>
    );
}

export function useTask(): TaskContextData {
    const context = useContext(TaskContext);

    return context;
}