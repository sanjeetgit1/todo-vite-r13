import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TasksContext from "./Context/TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <TasksContext>
        <App />
    </TasksContext>
);
