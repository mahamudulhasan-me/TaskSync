const SingIn = ({ isSignUpActive, setIsSignUpActive }) => {
  return (
    <>
      <form className="text-left">
        <label htmlFor="email">Email Address</label> <br />
        <input
          type="email"
          id="email"
          className="input-style  mb-5"
          placeholder="example@gmail.com"
        />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          id="password"
          className="input-style"
          placeholder="******"
        />
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
    </>
  );
};

export default SingIn;
