import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logInImg from "../assets/images/login-img.svg";
import secretary from "../assets/images/pngwing.com.png";
import SignUp from "../authentication/SignUp";
import SingIn from "../authentication/SingIn";
const SignInSignUp = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  return (
    <div className="bg-slate-50 min-h-screen px-[10%] grid grid-cols-2 items-center justify-center gap-10">
      <div className="flex flex-col items-center">
        <img src={secretary} alt="" className="w-28" />
        <h1 className="text-center text-5xl mb-10">
          TaskSync | Let&apos;s <br /> Management Better
        </h1>
        <img src={logInImg} alt="" />
      </div>
      <div className="h-full bg-primary py-10 px-16 text-slate-50 text-center">
        <h1 className="text-5xl">{isSignUpActive ? "Sign Up" : "Sign In"}</h1>
        <p>Free access to our dashboard.</p>

        <button className="flex justify-center items-center w-fit mx-auto border rounded-md p-2 text-lg gap-2 hover:bg-secondary transition-all mt-16 mb-8">
          <FcGoogle size={24} /> SignIn With Google
        </button>

        <div className="flex justify-center items-center gap-8 mb-4">
          <div className="h-px bg-slate-200 w-full"></div>
          <p className="text-slate-400">OR</p>
          <div className="h-px bg-slate-200 w-full"></div>
        </div>
        {isSignUpActive ? (
          <SignUp
            isSignUpActive={isSignUpActive}
            setIsSignUpActive={setIsSignUpActive}
          />
        ) : (
          <SingIn
            isSignUpActive={isSignUpActive}
            setIsSignUpActive={setIsSignUpActive}
          />
        )}
      </div>
    </div>
  );
};

export default SignInSignUp;
