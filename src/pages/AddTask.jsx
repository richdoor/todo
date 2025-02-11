import { useState } from "react";
import '../CSS/AddTodo.css';

export default function AddTodo() {
    // useState for the add task
    const [taskList, setTaskList] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(true);

    const daysToComplete = (date) => {
        const currDate = new Date().getTime();
        const dueDate = new Date(date).getTime();
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        const differenceDays = (dueDate - currDate) / millisecondsInDay;
        return Math.round(differenceDays);
    }

    const handleAdd = () => {
        if (name.trim()) {
            setTaskList([...taskList, {
                name: name, 
                completed: completed, 
                dueDate: date, 
                daysLeft: daysToComplete(date)
            }]);
            setName("");
        }
    }

    const handleCancel = (index) => {
        setTaskList(taskList.filter((_, i) => i !== index))
    }
    
    return(
        <>
            <div>  
                <h2>Enter Item</h2>
                <input className="task-name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input className="task-date" type="datetime-local" min={new Date()} value={date} onChange={e => setDate(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <ul>
                    {taskList.map((taskObj, index) => {
                        return(
                            <div className="task-container" id={index} key={index}>
                                <input type="checkbox" className="task-input"  id={index.toString() + "i"} value={completed} onChange={e => setCompleted(e.target.value)}/>
                                <label className="task-label" htmlFor={index.toString() + "i"}>{taskObj.name}</label>
                                <button className="task-cancel" onClick={() => handleCancel(index)}>X</button>
                                {taskObj.daysLeft}
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}