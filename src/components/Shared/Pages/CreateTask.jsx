import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateTask = () => {
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
      <form className="bg-white px-16 mt-6 py-8 rounded-lg">
        <label htmlFor="title">Task Title</label> <br />
        <input
          type="text"
          className="w-full outline-none focus:border py-3 px-4 rounded-md text-gray-800 bg-[#F9FBFD]"
        />
        <label htmlFor="title">Task Category</label> <br />
        <input
          type="text"
          className="w-full outline-none focus:border py-3 px-4 rounded-md text-gray-800 bg-[#F9FBFD]"
        />
      </form>
    </div>
  );
};

export default CreateTask;
