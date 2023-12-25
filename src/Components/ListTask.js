import React from "react"
import Task from "./Task"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../JS/Actions/action"

const ListTask = () => {
    const tasks = useSelector( store => store.tasks)
    const filter = useSelector( store => store.filter)
    const dispatch = useDispatch()

    const filtredTask = tasks.filter(task =>{
        switch(filter){
            case "done":
                return task.isDone;
            case "notdone":
                return !task.isDone;

            default :
                  return true
        }
    })

    return(
        <div>
            <div>
                <button onClick={() =>dispatch(setFilter("all"))} className="category">All</button>
                <button onClick={() =>dispatch(setFilter("done"))} className="category">Done</button>
                <button onClick={() =>dispatch(setFilter("notdone"))} className="category">Not Done</button>
            </div>
            <div className="rowTasks"> 
                <div className="blocTasks">
                        {
                            filtredTask.map( task =>(
                                <Task task={task} key={task.id}/>
                            ))
                        }

                    
                </div>
            </div>
            
        </div>
    )
}

export default ListTask