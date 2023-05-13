import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RobotsStructure from "./types";

export interface RobotState {
  robots: RobotsStructure[];
}

export const initialState: RobotState = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots: (
      currentState,
      action: PayloadAction<RobotsStructure[]>
    ): RobotState => ({
      ...currentState,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
