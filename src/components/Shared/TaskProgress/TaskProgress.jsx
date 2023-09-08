import React from "react";

const TaskProgress = () => {
  return (
    <div className="bg-white px-6 mt-6 py-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] space-y-3">
      <h3 className="font-semibold text-lg">Task Progress</h3>
      <div>
        <span className="flex justify-between items-center">
          <h3 className="text-lg">UI/UX Design</h3> <p>90%</p>
        </span>
        <progress
          className="progress progress-success w-full h-3"
          value="90"
          max="100"
        ></progress>
      </div>
      <div>
        <span className="flex justify-between items-center">
          <h3 className="text-lg">Website Design</h3> <p>20%</p>
        </span>
        <progress
          className="progress progress-warning w-full h-3"
          value="20"
          max="100"
        ></progress>
      </div>
      <div>
        <span className="flex justify-between items-center">
          <h3 className="text-lg">Quality Assurance</h3> <p>60%</p>
        </span>
        <progress
          className="progress progress-secondary w-full h-3"
          value="60"
          max="100"
        ></progress>
      </div>

      <div>
        <span className="flex justify-between items-center">
          <h3 className="text-lg">Development</h3> <p>50%</p>
        </span>
        <progress
          className="progress progress-accent w-full h-3"
          value="50"
          max="100"
        ></progress>
      </div>
      <div>
        <span className="flex justify-between items-center">
          <h3 className="text-lg">Testing</h3> <p>70%</p>
        </span>
        <progress
          className="progress progress-info w-full h-3"
          value="70"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default TaskProgress;
