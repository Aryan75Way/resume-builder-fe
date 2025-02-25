import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateResume } from "@/store/reducers/resumeReducer";

const ProjectForm = () => {
  const dispatch = useAppDispatch();
  const resumeState = useAppSelector((state) => state.resume);
  const [project, setProject] = useState<string>(resumeState.projects);

  useEffect(() => {
    const data = { projects: project };
    if (data)
      dispatch(updateResume(data));
  }, [project]);

  return (
    <div data-color-mode="light">
        <p className="text-sm font-semibold">Projects Details</p>
      <MDEditor
        value={project}
        onChange={(value) => setProject(value as string)}
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

export default ProjectForm;
