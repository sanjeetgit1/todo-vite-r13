import { useContext } from "react";
import { taskscontext } from "../Context/TasksContext";

const Header = () => {
    const [tasks] = useContext(taskscontext);

    return (
        <div className="mt-[7%] w-[35%] h-[30vh] border rounded-3xl flex justify-around items-center">
            <div className="text-white">
                <h1 className="text-3xl font-bold">LETS TODO</h1>
                <p>Keeps doing things</p>
            </div>
            <div className="text-3xl font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-[#16A34A]">
                {tasks.filter((t) => t.completed === true).length}/
                {tasks.length}
            </div>
        </div>
    );
};

export default Header;
