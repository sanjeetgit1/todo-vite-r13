import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { taskscontext } from "../Context/TasksContext";

import './Create.css'
const Create = () => {
    const [tasks, settasks] = useContext(taskscontext);
    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newtodo = { id: nanoid(), title, completed: false };

        settasks([...tasks, newtodo]);
        settitle("");
        localStorage.setItem("tasks", JSON.stringify([...tasks, newtodo]));
    };

    return (
        <form  
        id="input"
            onSubmit={SubmitHandler}
            className="w-[35%] flex justify-between px-5 my-[2%]"
        >
            <input
          
                onChange={(e) => settitle(e.target.value)}
                value={title}
                placeholder="write your next task..."
                className="px-5 py-2 text-white outline-none w-[80%] rounded-xl bg-zinc-700 "
                type="text"
            />
            <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-green-900">
                <i id="ri-add" className="ri-add-fill"></i>
            </button>
        </form>
    );
};

export default Create;
