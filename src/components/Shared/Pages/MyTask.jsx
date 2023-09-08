import React, { useEffect, useState } from "react";
import { FaChartLine, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Function to mark a task as completed
  const handleCompleteTask = (taskId) => {
    Swal.fire({
      title: "Do you want to complete this task?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Complete",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, status: true } : task
        );
        // Update the local state and store the updated tasks in local storage
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        Swal.fire("Task Completed!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

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
      {tasks.length === 0 ? (
        <p className="text-center font-semibold my-10 text-gray-700">
          You Have No Task Request Yet
        </p>
      ) : (
        <div className="overflow-x-auto text-gray-700">
          <table className="table table-zebra ">
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

            <tbody className="text-lg">
              {/* Map through tasks and render each task */}
              {tasks.map((task, index) => (
                <tr key={task.id}>
                  <th>{index + 1}</th>
                  <td>{task.title}</td>
                  <td>{task.endDate}</td>
                  <td>{task.priority}</td>
                  <td>
                    {task.status ? (
                      <span className="bg-green-600 p-0.5 rounded-sm text-white">
                        Completed
                      </span>
                    ) : (
                      <span className="bg-orange-500 p-0.5 rounded-sm text-white">
                        In Progress
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      disabled={task.status ? true : false}
                      className="bg-primary rounded-md p-2 text-white"
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      Make Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTask;
