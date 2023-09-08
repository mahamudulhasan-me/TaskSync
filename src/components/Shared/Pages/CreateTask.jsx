import React, { useContext } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, uid } = user;

  // Function to generate a unique ID (you can use a library like `uuid`)
  const generateUniqueId = () => {
    // Generate a unique ID using timestamp and a random number
    return new Date().getTime() + Math.random().toString(36).substring(7);
  };
  const handleCreateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const priority = form.priority.value;
    const description = form.description.value;

    // Generate a unique ID for the task (you can use a library like `uuid`)
    const taskId = generateUniqueId();

    const taskDetails = {
      taskCreator: displayName,
      taskCreatorEmail: email,
      taskCreatorId: uid,
      taskCompleted: false,
      title,
      category,
      startDate,
      endDate,
      priority,
      description,
    };

    // Retrieve existing tasks from local storage or initialize an empty array
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the array
    existingTasks.push({ id: taskId, ...taskDetails });

    // Store the updated tasks back in local storage
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    Swal.fire(
      "Task Create Successfully!",
      "You clicked the button!",
      "success"
    );
    // Clear the form fields (you can do this by resetting the form or clearing individual fields)
    form.reset();
  };

  return (
    <div>
      <header className="flex justify-between items-center border-b mt-5 pb-2">
        <h1 className="text-4xl flex items-center">
          Create Task <AiOutlineAppstoreAdd />
        </h1>
        <Link className="flex gap-2 items-center bg-primary text-gray-200 px-3 py-2 rounded-md ">
          Track Task <FaChartLine />
        </Link>
      </header>

      {/* task create from  */}
      <form
        onSubmit={handleCreateTask}
        className="bg-white px-10 mt-6 py-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] space-y-3"
      >
        <div>
          <label htmlFor="title">Task Title*</label> <br />
          <input
            type="text"
            name="title"
            className="create_task-input"
            placeholder="Task Title/Project Name"
            required
          />
        </div>
        {/* task category  */}
        <div>
          <label htmlFor="title">Task Category*</label> <br />
          <select className="create_task-input" name="category" required>
            <option value="">Select Category</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Software Testing">Software Testing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* task due date  */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="startDate">Task Start Date</label> <br />
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="create_task-input"
            />
          </div>
          <div>
            <label htmlFor="endDate">Task End Date*</label> <br />
            <input
              type="date"
              name="endDate"
              id="endDate"
              className="create_task-input"
              required
            />
          </div>
        </div>
        {/* priority lavel */}
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <label htmlFor="startDate">Priority*</label> <br />
            <select className="create_task-input" name="priority" required>
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* notification  */}
          <div className="col-span-3">
            <label htmlFor="startDate">Notification Send</label> <br />
            <select name="notification" id="" className="create_task-input">
              <option value="All">All</option>
              <option value="Team Leader Only">Team Leader Only</option>
              <option value="Team Member Only">Team Member Only</option>
            </select>
          </div>
        </div>
        {/* description */}
        <div>
          <label htmlFor="description">Task Description</label> <br />
          <textarea
            name="description"
            id=""
            rows="3"
            className="create_task-input"
            placeholder="Add any extra details about the request"
          ></textarea>
        </div>
        <button className="bg-primary text-gray-200 px-4 py-2 rounded-md font-semibold">
          Create
        </button>
        {/* <but
          onClick={clearForm}
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md ml-3"
        >
          Clear Form
        </but> */}
      </form>
    </div>
  );
};

export default CreateTask;
