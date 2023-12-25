import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTask, editTask, toggleTask } from "../JS/Actions/action";

const Task = ({task}) => {
    const dispatch = useDispatch();
    const [isEditing,setIsEditing]= useState(false)
    const [description,setDescription]= useState(task.description)

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTask(task.id,description))
        setIsEditing(false)
    }

    const handleToggle = () =>{
        dispatch(toggleTask(task.id))
    }

    return(
        <div className="tasks">
        {
            !isEditing ?(
                <div className="bgTasks">
                    <input type="checkbox" checked={task.isDone} onChange={handleToggle}/>
                    <span className="descriptionTask">{task.description}</span>
                    <div>
                        <img
                            src="writing.png"  // Replace with the path to your image
                            alt="Edit"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setIsEditing(true)}
                            className="edit"
                        />
                        <img
                            src="delete.png"  // Replace with the path to your image
                            alt="Delete"
                            style={{ cursor: 'pointer' }}
                            onClick={handleDelete}
                            className="delete"
                        />
                    </div>

                 </div>
            ):(
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) =>setDescription(e.target.value)}/>
                    <button>Save</button>
                </form>
            )
        }
        </div>


    )
}

export default Task