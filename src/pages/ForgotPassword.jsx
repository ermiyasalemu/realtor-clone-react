import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onChangeHandler = (e) => {
  setEmail(e.target.value)
  };
  
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bSMhw_Jx5FYdA6zmLVT8rM5_bln5N7JcPw&s"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
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
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700
                        transition duration-200 ease-in-out ml-l"
                >
                 
                 {" "}  Register
                </Link>
              </p>

              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800
                        transition duration-200 ease-in-out"
                >
               Sign in insted
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
            Send reset password 
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
