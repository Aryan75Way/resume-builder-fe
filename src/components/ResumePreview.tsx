import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FirstTemplate from "./templates/FirstTemplate";
import SecondTemplate from "./templates/SecondTemplate";

const ResumePreview = () => {
  return (
    <Tabs defaultValue="Template1" className="w-full h-full">
      <TabsList className="w-full bg-white/80">
        <TabsTrigger value="Template1" className="w-full">
          Template 1
        </TabsTrigger>
        <TabsTrigger value="Template2" className="w-full">
          Template 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Template1" className="h-full">
        <FirstTemplate />
      </TabsContent>
      <TabsContent value="Template2" className="h-full">
        <SecondTemplate />
      </TabsContent>
    </Tabs>
  );
};

export default ResumePreview;
