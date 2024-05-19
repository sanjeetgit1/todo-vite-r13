import { createContext, useState } from "react";

export const taskscontext = createContext(null);

const TasksContext = (props) => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    return (
        <taskscontext.Provider value={[tasks, settasks]}>
            {props.children}
        </taskscontext.Provider>
    );
};

export default TasksContext;
