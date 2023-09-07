import { BiTask } from "react-icons/bi";
import logInImg from "../assets/images/login-img.svg";
const SignInSignUp = () => {
  return (
    <div className="bg-slate-50 min-h-screen px-[10%] flex justify-between items-center">
      <div className="flex flex-col items-center">
        <BiTask size={100} className="text-gray-600" />
        <h1 className="text-center">
          TaskSync Let&apos;s <br /> Management Better
        </h1>
        <img src={logInImg} alt="" />
      </div>
      <div> Sign in</div>
    </div>
  );
};

export default SignInSignUp;
