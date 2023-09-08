import React, { useEffect, useState } from "react";
import { FaChartLine, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <header className="flex justify-between items-center border-b mt-5 pb-2">
        <h1 className="text-4xl flex items-center">
          My Task <FaTasks />
        </h1>
        <Link className="flex gap-2 items-center bg-primary text-gray-200 px-3 py-2 rounded-md ">
          Track Task <FaChartLine />
        </Link>
      </header>
      <div className="overflow-x-auto text-gray-700">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-gray-700 text-lg">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Last Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through tasks and render each task */}
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.endDate}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{/* Add edit button or link if needed */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;
