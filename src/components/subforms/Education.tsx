import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateResume } from "@/store/reducers/resumeReducer";

const EducationForm = () => {
  const dispatch = useAppDispatch();
  const resumeState = useAppSelector((state) => state.resume);
  const [education, setEducation] = useState<string>(resumeState.education);

  useEffect(() => {
    const data = { education: education };
    if (data)
      dispatch(updateResume(data));
  }, [education]);

  return (
    <div data-color-mode="light">
        <p className="text-sm font-semibold">Educational Details</p>
      <MDEditor
        value={education}
        onChange={(value) => setEducation(value as string)}
        id="projects"
        preview="edit"
        height={150}
        style={{ borderRadius: 5, overflow: "hidden", backgroundColor:"white" }}
        textareaProps={{
          placeholder:
            "Briefly describe your projects and what problem it solves",
        }}
        previewOptions={{
          disallowedElements: ["style"],
        }}
      />
    </div>
  );
};

export default EducationForm;
