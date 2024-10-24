import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export default function OAuth() {
  const navigate = useNavigate();

async function onGoogleClick() {

  try {
    
    const auth = getAuth(); 
    const provider = new GoogleAuthProvider()
    const  result = await signInWithPopup(auth, provider)
    const user = result.user
    // check for the user exist in db 
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)

    if(!docSnap.exists()){
      await setDoc(docRef, {
        name: user.displayName, 
        email: user.email, 
        timestamp: serverTimestamp(),

      })
    } // end of if
    
    navigate("/")

  } catch (error) {
    toast.error("Could not authorize with Google !!")

  }

}
  return (
    <div>
     <button type="button" onClick={onGoogleClick} className="flex item-center 
     justify-center
      w-full bg-red-700 text-white
      px-7 py-3 uppercase
      text-sm font-medium hover:bg-red-800
      active:bg-red-900 shadow-md hover:shadow-lg 
      active:shadow-lg transition duration-150 ease-in-out
      rounded ">
        <FcGoogle className="text-2xl bg-transparent rounded-full mr-2"/> 
        Continue with Google
     </button>
    </div>
  )
}
