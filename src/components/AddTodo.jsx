import { useState } from "react";

export default function AddTodo() {
    // useState for the add task
    const [taskList, setTaskList] = useState([]);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            setTaskList([...taskList, input]);
            setInput("");
        }
    }

    const handleCancel = (key) => {
        setTaskList(taskList.filter((task, index) => taskList[index] != taskList[key]))
    }
    
    return(
        <>
            <div>  
                <h2>Enter Todo item</h2>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <ul>
                    {taskList.map((item, index) => {
                        return(
                            <div className="task-container">
                                <input type="checkbox" />
                                <li key={index}>{item}</li> 
                                <button className="task-cancel" onClick={(index) => handleCancel(index)}>X</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}