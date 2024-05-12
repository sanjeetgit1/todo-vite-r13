import { nanoid } from "nanoid";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newtodo = { id: nanoid(), title, completed: false };
        console.log(newtodo);

        // const copytasks = [...tasks]
        // copytasks.push(newtodo);
        // settasks(copytasks)

        settasks([...tasks, newtodo]);
        settitle("");
        localStorage.setItem("tasks", JSON.stringify([...tasks, newtodo]));
    };

    const CompleteHandler = (index) => {
        console.log(index);
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        settasks(copyTasks);
        localStorage.setItem("tasks", JSON.stringify(copyTasks));
    };

    const DeleteHandler = (id) => {
        settasks(tasks.filter((t) => t.id != id));
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks.filter((t) => t.id != id))
        );
    };

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            {/*  */}
            <Header tasks={tasks} />
            {/*  */}

            <form
                onSubmit={SubmitHandler}
                className="w-[35%] flex justify-between px-5 my-[2%]"
            >
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    placeholder="write your next task..."
                    className="px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700 "
                    type="text"
                />
                <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
                    <i className="ri-add-fill"></i>
                </button>
            </form>
            {/*  */}

            <ul className="list-none w-[35%] ">
                {tasks.length > 0 ? (
                    tasks.map((task, index) => {
                        return (
                            <li
                                key={task.id}
                                className="mb-5 flex justify-between items-center border rounded-xl p-5"
                            >
                                <div className="flex items-center">
                                    <div
                                        onClick={() => CompleteHandler(index)}
                                        className={`${
                                            task.completed
                                                ? "bg-green-600"
                                                : "border"
                                        } mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                                    ></div>
                                    <h1
                                        className={`${
                                            task.completed ? "line-through" : ""
                                        } text-2xl font-extrabold text-yellow-100`}
                                    >
                                        {task.title}
                                    </h1>
                                </div>
                                <div className="flex gap-3 text-2xl text-yellow-100">
                                    <i className="ri-file-edit-line"></i>
                                    <i
                                        onClick={() => DeleteHandler(task.id)}
                                        className="ri-delete-bin-3-line"
                                    ></i>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <h1 className="mt-10 w-full text-center text-orange-600 text-3xl">
                        No Pending Tasks
                    </h1>
                )}
            </ul>
        </div>
    );
};

export default App;
