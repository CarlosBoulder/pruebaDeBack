import { renderHook } from "@testing-library/react";
import { server } from "../mocks/servers";
import robotsMock from "../mocks/robotsMock";
import useApi from "./useApi";
import RobotsStructure from "../store/robots/types";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a getRobots function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of robots", async () => {
      const expectedRobotsList: RobotsStructure[] = robotsMock;

      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi());

      const robots = await getRobots();

      expect(robots).toStrictEqual(expectedRobotsList);
    });
  });
});
