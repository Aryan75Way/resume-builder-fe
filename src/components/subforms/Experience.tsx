import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateResume } from "@/store/reducers/resumeReducer";
import MDEditor from "@uiw/react-md-editor";

const ExperienceForm = () => {
    const dispatch = useAppDispatch();
    const resumeState = useAppSelector((state) => state.resume);
    const [experience, setExperience] = useState<string>(resumeState.experience);
  
    useEffect(() => {
      const data = { experience: experience };
      if (data)
        dispatch(updateResume(data));
    }, [experience]);
  
    return (
      <div data-color-mode="light">
          <p className="text-sm font-semibold">Experiences Details</p>
        <MDEditor
          value={experience}
          onChange={(value) => setExperience(value as string)}
          id="experience"
          preview="edit"
          height={150}
          style={{ borderRadius: 5, overflow: "hidden", backgroundColor:"white" }}
          textareaProps={{
            placeholder:
              "Briefly describe your experiences and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
      </div>
    );
}

export default ExperienceForm;