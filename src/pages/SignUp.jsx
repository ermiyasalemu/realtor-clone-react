import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  const {name, email, password } = formData;
  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="data:image/jpeg;base64,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"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
          <input
                type="text"
                id="name"
                value={name}
                onChange={onChangeHandler}
                placeholder="Full tname"
                className="w-full px-4 py-2 text-xl
                     text-gray-700 bg-white 
                     border-gray-300 
                     rounded transition ease-in-out mb-6"
              />
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChangeHandler}
              placeholder="Email Address"
              className="mb-6 w-full px-4 py-2 text-xl
                     text-gray-700 bg-white 
                     border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
            
             
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChangeHandler}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl
                     text-gray-700 bg-white 
                     border-gray-300 rounded transition ease-in-out"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3
                        top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3
                       top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700
                        transition duration-200 ease-in-out ml-l"
                >
                 
                 {" "}  Sign in  
                </Link>
              </p>

              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800
                        transition duration-200 ease-in-out"
                >
               
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
            type="submit"
            className="w-full bg-blue-600
                 text-white px-7 py-3 text-sm font-medium 
                uppercase rounded shadow-md
                 hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg
                active:bg-blue-800"
          >
            Sign up
          </button>
          <div className="flex my-4 before:border-t  
          before:flex-1 items-center before:border-r-gray-300
          after:border-t  
          after:flex-1 items-center after:border-r-gray-300">
            <p className="text-center 
            font-semibold mx-4">OR</p>
          </div>
          <OAuth />
          </form>
     
        </div>
      </div>
    </section>
  );
}
