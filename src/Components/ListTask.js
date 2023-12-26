import React, { useState } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../JS/Actions/action";

const ListTask = () => {
  const tasks = useSelector((store) => store.tasks);
  const filter = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filtredTask = tasks.filter((task) => {
    switch (filter) {
      case "done":
        return task.isDone;
      case "notdone":
        return !task.isDone;
      default:
        return true;
    }
  });

  const handleFilterClick = (filterType) => {
    dispatch(setFilter(filterType));
    setSelectedFilter(filterType);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleFilterClick("all")}
          className={`category ${selectedFilter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterClick("done")}
          className={`category ${selectedFilter === "done" ? "active" : ""}`}
        >
          Done
        </button>
        <button
          onClick={() => handleFilterClick("notdone")}
          className={`category ${selectedFilter === "notdone" ? "active" : ""}`}
        >
          Undone
        </button>
      </div>
      <div className="rowTasks">
        <div className="blocTasks">
          {filtredTask.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTask;
