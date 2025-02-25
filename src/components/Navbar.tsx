import { logout } from "@/store/reducers/authReducer";
import { Logout } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
    const dispatch = useDispatch();
    const { email } = useSelector((state: any) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }
  return (
    <div className="border-b border-gray-200 h-full flex justify-between items-center px-4">
        <Link to="/">
        <img src="/vite.svg" alt="logo" className="h-6 w-6" />
        </Link>
        <div className="space-x-2 flex items-center">
          <p className="border rounded-full px-2 text-sm text-gray-600">{email}</p>
        <button onClick={handleLogout}>
        <Logout/>
        </button>
        </div>
    </div>
  )
}

export default Navbar
