import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            {/*  */}
            <Header />
            {/*  */}
            <Create tasks={tasks} settasks={settasks} />
            {/*  */}
            <Show tasks={tasks} settasks={settasks} />
        </div>
    );
};

export default App;
