import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import ResumePreview from "./ResumePreview";

const ResumeDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <Button className="w-full">View Resume</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-sky-100">
        <ResumePreview/>
      </DrawerContent>
    </Drawer>
  );
};

export default ResumeDrawer;