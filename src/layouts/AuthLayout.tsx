import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";

function AuthLayout() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigation("/");
    }
  }, [isLoggedIn]);
  
  return <Outlet />;
}

export default AuthLayout;
