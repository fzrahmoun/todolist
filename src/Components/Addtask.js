import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/action";

const AddTask = ()=>{
    const dispatch = useDispatch();
    const [description,setDescription]=useState("");

   const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(description));
        setDescription("");

    }
    return(
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="inputAdd"/>
                <button type="submit" className="btnAdd">ADD</button>
            </form>
        </div>
    )
}

export default AddTask