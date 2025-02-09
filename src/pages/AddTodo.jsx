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

    const handleCancel = (index) => {
        setTaskList(taskList.filter((_, i) => i !== index))
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
                    {taskList.map((task, index) => {
                        return(
                            <div className="task-container" key={index}>
                                <input type="checkbox" />
                                <li>{task}</li> 
                                <button className="task-cancel" onClick={() => handleCancel(index)}>X</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}