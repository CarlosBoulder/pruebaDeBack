import robotsMock from "../../mocks/robotsMock";
import {
  RobotState,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";
import RobotsStructure from "./types";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load robots action with two robots", () => {
    test("Then it should return a list with two robots", () => {
      const currentRobotsState: RobotState = {
        robots: [],
      };

      const newRobots: RobotsStructure[] = robotsMock;

      const expectedRobotsState: RobotState = {
        robots: newRobots,
      };

      const loadRobotsAction = loadRobotsActionCreator(newRobots);
      const newRobotsState = robotsReducer(
        currentRobotsState,
        loadRobotsAction
      );

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });
});
