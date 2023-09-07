import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Navbar from "../components/Shared/Navbar/Navbar";
const Main = () => {
  return (
    <div className="bg-[#F9FBFD] grid grid-cols-12 p-6 gap-10">
      <Navbar />
      <div className="col-span-9">
        <Header />
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <Outlet />
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
