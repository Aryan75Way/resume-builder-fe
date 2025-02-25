import { createSlice } from "@reduxjs/toolkit";

interface EducationType {
  degree: string;
  venue: string;
  grade: number;
  duration: string;
}

interface ExperienceType {
  org: string;
  details: string[];
  duration: string;
}

interface ProjectType {
  title: string;
  technologies_used: string;
  details: string[];
}

interface ResumeState {
  name: string;
  address: string;
  email: string;
  linkedin: string;
  github: string;
  contact: string;
  education: EducationType[];
  languages: string[];
  frameworks_tools: string[];
  subjects: string[];
  experience: ExperienceType[];
  projects: ProjectType[];
  achievements: string[];
}

// Define the initial state using that type
const initialState: ResumeState = {
  name: "",
  address: "",
  email: "",
  linkedin: "",
  github: "",
  contact: "",
  education: [],
  languages: [],
  frameworks_tools: [],
  subjects: [],
  experience: [],
  projects: [],
  achievements: []
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    clearAll: () => {
      return initialState;
    },
  },
});

export const { clearAll } = resumeSlice.actions;

export default resumeSlice.reducer;
