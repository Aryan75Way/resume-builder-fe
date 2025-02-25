import { useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/login");
    }
  }, [isLoggedIn]);

  if (isLoggedIn)
  return (
    <div className="h-full p-2 overflow-y-auto">
    Resume Builder
    </div>
  );
}
