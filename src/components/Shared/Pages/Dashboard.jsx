import Lottie from "lottie-react";
import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import dashboardLottie from "../../../assets/animation_lmalrmcn.json";

const Dashboard = () => {
  return (
    <div>
      <header className="flex justify-between items-center border-b mt-5 pb-2">
        <h1 className="text-4xl flex items-center">
          Dashboard <AiOutlineAppstoreAdd />
        </h1>
        <Link className="flex gap-2 items-center bg-primary text-gray-200 px-3 py-2 rounded-md ">
          Track Task <FaChartLine />
        </Link>
      </header>
      <Lottie
        animationData={dashboardLottie}
        loop={true}
        className=" w-1/2 mx-auto -mt-16"
      />
      <h1 className="text-center font-semibold text-primary text-3xl -mt-24">
        Welcome to TaskSync Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;
