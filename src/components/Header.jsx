import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {

  const [pageState, setPageState] = useState("Sign in")
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();


  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState("Profile")
      }
    })
  }, [auth])
  

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <img
          src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
          alt="logo"
          className="h-5 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${
                pathMatchRoute("/")
                  ? "text-black border-b-4 border-b-red-400"
                  : "text-gray-400 border-b-3 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-4 border-b-red-400"
                  : "text-gray-400 border-b-3 border-b-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold${
               ( pathMatchRoute("/sign-in") || pathMatchRoute("/profile"))
                ? "text-black border-b-4 border-b-red-400" 
                  : "text-gray-400 border-b-3 border-b-transparent"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}

            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
