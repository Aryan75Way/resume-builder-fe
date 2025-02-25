import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/login");
    }
  }, [isLoggedIn]);

  if (isLoggedIn)
    return (
      <div className="h-screen">
        <Navbar/>
        <div className="h-full">
        <Outlet />  
        </div>
      </div>
    );
}
