import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SingIn = ({ isSignUpActive, setIsSignUpActive }) => {
  const { logInWithEmailAndPassword, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        // toast.success(`Welcome ${user.displayName}`);
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <form className="text-left" onSubmit={handleLogin}>
        <label htmlFor="email">Email Address</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          className="input-style  mb-5"
          placeholder="example@gmail.com"
        />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          className="input-style"
          placeholder="******"
        />
        <p className="text-rose-600">{error}</p>
        <button className="flex justify-center text-gray-800 items-center mx-auto border rounded-md py-2 px-4 text-lg font-semibold bg-slate-50 transition-all  mt-10 mb-6 hover:my-8">
          {loading ? "Loading" : "Sign In"}
        </button>
        <p className="text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => setIsSignUpActive(!isSignUpActive)}
          >
            Sign up here
          </span>
        </p>
      </form>
    </>
  );
};

export default SingIn;
