import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function SignIn() {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [showPassword, setShowPassword] = useState(false);




  async function onSubmit(e) {

    e.preventDefault(); 

    try {
      const auth = getAuth()
      const userCrediential = await signInWithEmailAndPassword(auth, email, password)
      if(userCrediential.user){
        navigate("/")
      }


    } catch (error) {
      toast.error("Invalid username of password")
    }
    
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bSMhw_Jx5FYdA6zmLVT8rM5_bln5N7JcPw&s"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
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
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700
                        transition duration-200 ease-in-out ml-l"
                >
                 
                 {" "}  Register 
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
            Sign in 
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
