import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateResume } from "@/store/reducers/resumeReducer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ProjectForm from "./subforms/Projects";
import EducationForm from "./subforms/Education";
import ExperienceForm from "./subforms/Experience";

// Validation schema for the form
const validation = yup.object({
  name: yup.string().required(),
  address: yup.string(),
  contact: yup.string(),
  email: yup.string().email().required(),
  linkedin: yup.string(),
  github: yup.string(),
  education: yup.string(),
  languages: yup.array().of(yup.string()),
  frameworks_tools: yup.array().of(yup.string()),
  subjects: yup.array().of(yup.string()),
  experience: yup.string(),
  projects: yup.string(),
  achievements: yup.array().of(yup.string()),
});

type FormData = typeof validation.__outputType;

export default function ResumeForm() {
  const dispatch = useAppDispatch();
  const resumeState = useAppSelector((state) => state.resume);

  const form = useForm<FormData>({
    defaultValues: resumeState,
    resolver: yupResolver(validation),
  });

  const { control, setValue, watch } = form;

  const [count, setCount] = useState({
    education: 1,
    languages: 1,
    frameworks_tools: 1,
    subjects: 1,
    experience: 1,
    projects: 1,
    achievements: 1,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      // @ts-ignore
      dispatch(updateResume(data));
    });
    return () => subscription.unsubscribe();
  }, [watch, dispatch]);

  return (
    <Form {...form}>
      <form className="space-y-2">
        {/* Basic Info Fields */}
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Contact" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="LinkedIn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Github" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Education fields  */}
        <EducationForm/>

        {/* Languages Fields  */}
        <FormField
          control={control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <FormLabel>Languages</FormLabel>
                  <div
                    onClick={() => {
                      setCount((prev) => ({
                        ...prev,
                        languages: prev.languages + 1,
                      }));
                      setValue("languages", [
                        ...(form.getValues("languages") || []),
                        "",
                      ]);
                    }}
                    className="cursor-pointer"
                  >
                    <PlusSquare />
                  </div>
                </div>

                {/* Mapping over the languages array */}
                {(form.getValues("languages") || []).map((language, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center space-x-2"
                  >
                    <FormControl>
                      <Input
                        placeholder="Language"
                        value={language}
                        onChange={(e) => {
                          const updatedLanguages = [
                            ...form.getValues("languages") || []
                          ];
                          updatedLanguages[index] = e.target.value;
                          setValue("languages", updatedLanguages);
                        }}
                      />
                    </FormControl>
                  </div>
                ))}
              </div>
            </FormItem>
          )}
        />

        {/* Framework and tools  */}
        <FormField
          control={control}
          name="frameworks_tools"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <FormLabel>Frameworks & Tools</FormLabel>
                  <div
                    onClick={() => {
                      setCount((prev) => ({
                        ...prev,
                        frameworks_tools: prev.frameworks_tools + 1,
                      }));
                      setValue("frameworks_tools", [
                        ...(form.getValues("frameworks_tools") || []),
                        "",
                      ]);
                    }}
                    className="cursor-pointer"
                  >
                    <PlusSquare />
                  </div>
                </div>

                {/* Mapping over the frameworks_tools array */}
                {(form.getValues("frameworks_tools") || []).map(
                  (tool, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center space-x-2"
                    >
                      <FormControl>
                        <Input
                          placeholder="Framework/Tool"
                          value={tool}
                          onChange={(e) => {
                            const updatedTools = [
                              ...form.getValues("frameworks_tools") || []
                            ];
                            updatedTools[index] = e.target.value;
                            setValue("frameworks_tools", updatedTools);
                          }}
                        />
                      </FormControl>

                      {/* Remove tool button */}
                      {(form.getValues("frameworks_tools")?.length || 0) > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updatedTools = form
                              .getValues("frameworks_tools")
                              ?.filter((_, i) => i !== index);
                            setValue("frameworks_tools", updatedTools);
                          }}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>
            </FormItem>
          )}
        />

        {/* Subjects  */}
        <FormField
          control={control}
          name="subjects"
          render={() => (
            <FormItem>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <FormLabel>Subjects</FormLabel>
                  <div
                    onClick={() => {
                      setCount((prev) => ({
                        ...prev,
                        subjects: prev.subjects + 1,
                      }));
                      setValue("subjects", [
                        ...(form.getValues("subjects") || []),
                        "",
                      ]);
                    }}
                    className="cursor-pointer"
                  >
                    <PlusSquare />
                  </div>
                </div>

                {/* Mapping over the subjects array */}
                {(form.getValues("subjects") || []).map((subject, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center space-x-2"
                  >
                    <FormControl>
                      <Input
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => {
                          const updatedSubjects = [
                            ...form.getValues("subjects") || []
                          ];
                          updatedSubjects[index] = e.target.value;
                          setValue("subjects", updatedSubjects);
                        }}
                      />
                    </FormControl>
                  </div>
                ))}
              </div>
            </FormItem>
          )}
        />

        {/* Experience section  */}
        <ExperienceForm/>
        

        {/* Project section  */}
        <ProjectForm/>

        {/* Achievements section  */}
        <FormField
          control={control}
          name="achievements"
          render={() => (
            <FormItem>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <FormLabel>Achievements</FormLabel>
                  <div
                    onClick={() => {
                      setCount((prev) => ({
                        ...prev,
                        achievements: prev.achievements + 1,
                      }));
                      setValue("achievements", [
                        ...(form.getValues("achievements") || []),
                        "",
                      ]);
                    }}
                    className="cursor-pointer"
                  >
                    <PlusSquare />
                  </div>
                </div>

                {/* Mapping over the achievements array */}
                {(form.getValues("achievements") || []).map(
                  (achievement, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center space-x-2"
                    >
                      <FormControl>
                        <Input
                          placeholder="Achievement"
                          value={achievement}
                          onChange={(e) => {
                            const updatedAchievements = [
                              ...form.getValues("achievements") || []
                            ];
                            updatedAchievements[index] = e.target.value;
                            setValue("achievements", updatedAchievements);
                          }}
                        />
                      </FormControl>

                      {/* Remove achievement */}
                      {(form.getValues("achievements")?.length  || 0) > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updatedAchievements = form
                              .getValues("achievements")
                              ?.filter((_, i) => i !== index);
                            setValue("achievements", updatedAchievements);
                          }}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
