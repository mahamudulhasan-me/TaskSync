import logo from "../assets/images/pngwing.com.png";
import Header from "../components/Shared/Header/Header";
const Main = () => {
  return (
    <div className="bg-[#F9FBFD] grid grid-cols-12 p-6 gap-10">
      <nav className="col-span-3 bg-primary rounded-2xl h-[calc(100vh-3rem)] p-5">
        <div className="flex items-center justify-center gap-2">
          <figure className="w-20 h-20  bg-white p-2 rounded-full ">
            <img src={logo} alt="" />
          </figure>
          <h1 className="text-3xl text-gray-200">TaskSync</h1>
        </div>
      </nav>
      <div className="col-span-9">
        <Header />
      </div>
    </div>
  );
};

export default Main;
