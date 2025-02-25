import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";

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
      <div className="flex items-center justify-center min-h-screen">
          <Outlet />
          
      </div>
    );
}
