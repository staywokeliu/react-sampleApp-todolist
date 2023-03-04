import "./App.css";
import Title from "./conponents/Title";
import InputFrom from "./conponents/InputFrom";
import TodoList from "./conponents/TodoList";
import { useState } from "react";

function App() {
    const [taskList, setTaskList] = useState([]);

    return <div className="body">
        <Title />
        <InputFrom taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
}

export default App;



