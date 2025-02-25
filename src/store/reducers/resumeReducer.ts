import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ResumeState {
  name: string;
  address: string;
  email: string;
  linkedin: string;
  github: string;
  contact: string;
  education: string;
  languages: string[];
  frameworks_tools: string[];
  subjects: string[];
  experience: string;
  projects: string;
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
  education: "",
  languages: [],
  frameworks_tools: [],
  subjects: [],
  projects: "",
  experience: "",
  achievements: []
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    clearAll: () => {
      return initialState;
    },
    updateResume: (state, action: PayloadAction<Partial<ResumeState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { clearAll, updateResume } = resumeSlice.actions;

export default resumeSlice.reducer;
