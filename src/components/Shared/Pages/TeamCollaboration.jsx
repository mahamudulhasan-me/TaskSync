import React from "react";
import { FaChartLine } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TeamCollaboration = () => {
  return (
    <div>
      <header className="flex justify-between items-center border-b mt-5 pb-2">
        <h1 className="text-4xl flex items-center">
          Team Collaboration <RiTeamFill />
        </h1>
        <Link className="flex gap-2 items-center bg-primary text-gray-200 px-3 py-2 rounded-md ">
          Track Task <FaChartLine />
        </Link>
      </header>
      <h1 className="text-center my-10 text-xl">
        Due to my recent bout of{" "}
        <span className="text-rose-600">dengue fever</span>, I couldn't finish
        all of work. <br />
        Nonetheless, I'm making every effort to catch up and improve my progress
        as quickly as possible.
      </h1>
    </div>
  );
};

export default TeamCollaboration;
