import { createContext, useState, useEffect} from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  // Create a function for create a task
  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  }

  // Create a function for delete a task
  function deleteTask(tasksId) {
    setTasks(tasks.filter((task) => task.id !== tasksId));
  }

  useEffect(function () {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
