import { useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeDrawer from '@/components/ResumeDrawer';
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";

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
      <div className="h-full">
        <div className="h-full p-2 overflow-y-auto flex gap-5 justify-between items-start bg-sky-100">
          <div className="w-full h-full overflow-y-scroll bg-white p-2 sm:pb-10 pd-20 rounded-lg"><ResumeForm/></div>
          <div className="w-full h-full max-sm:hidden"><ResumePreview/></div>
        </div>

        <div className="fixed bottom-0 px-2 pb-2 w-full sm:hidden"><ResumeDrawer/></div>
      </div>
    );
}
