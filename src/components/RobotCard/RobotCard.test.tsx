import { render, screen } from "@testing-library/react";
import robotsMock from "../../mocks/robotsMock";
import RobotCard from "./RobotCard";

describe("Given a RobotsCard component", () => {
  describe("When it receives the robot 'War Eagle'", () => {
    test("Then it should show a card with the text 'War Eagle'", () => {
      const robot = robotsMock[0];

      const expectedName = robot.name;

      render(<RobotCard robot={robot} />);

      const name = screen.getByRole("heading", {
        level: 2,
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
