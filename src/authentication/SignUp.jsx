import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = ({ isSignUpActive, setIsSignUpActive }) => {
  const { createNewUser } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const [solidPassword, setSolidPassword] = useState("");
  const passwordHandle = (e) => {
    setPassError("");
    const password = e.target.value;

    if (!/(?=.*[a-z])/.test(password)) {
      setPassError("At least one  letter is required");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPassError("At lest one capital letter is required");
    } else if (!/(?=.*[0-9])/.test(password)) {
      setPassError("At least one digit is required");
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPassError("At least one special character is required");
    } else if (!/(?=.{6,})/.test(password)) {
      setPassError("Password must be 6 characters long");
    } else {
      setSolidPassword(password);
    }
  };
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const name = fName + " " + lName;
    const email = form.email.value;

    if (!passError) {
      setPassError("");
      createNewUser(email, solidPassword)
        .then((result) => {
          const user = result.user;
          updateProfile(user, { displayName: name })
            .then(() => navigate("/"))
            .catch((err) => setPassError(err.message));
        })
        .catch((error) => setPassError(error.message));
    }
  };
  return (
    <form className="text-left" onSubmit={handleCreateUser}>
      {/* full name  */}
      <label htmlFor="name">Full Name</label> <br />
      <div className="flex gap-5">
        <input
          type="text"
          id="name"
          name="firstName"
          className="input-style  mb-5"
          placeholder="John"
        />
        <input
          type="text"
          id="name"
          name="lastName"
          className="input-style  mb-5"
          placeholder="Perker"
        />
      </div>
      {/* email  */}
      <label htmlFor="email">Email Address</label> <br />
      <input
        type="email"
        id="email"
        name="email"
        className="input-style  mb-5"
        placeholder="example@gmail.com"
      />
      {/* password */}
      <label htmlFor="password">Password</label> <br />
      <input
        onChange={passwordHandle}
        type="password"
        id="password"
        name="password"
        className="input-style"
        placeholder="6+ character required"
      />
      <p>{passError}</p>
      {/* submit button */}
      <button className="flex justify-center text-gray-800 items-center mx-auto border rounded-md py-2 px-4 text-lg font-semibold bg-slate-50 transition-all  mt-10 mb-6 hover:my-8">
        Sign In
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
  );
};

export default SignUp;
