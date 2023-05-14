import { render, screen } from "@testing-library/react";
import robotsMock from "../../mocks/robotsMock";
import RobotList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of tasks with one card that contains the text 'War Eagle'", () => {
      const expectedText = robotsMock[0].name;

      render(<RobotList />);
      const titleText = screen.getByText(expectedText);

      expect(titleText).toBeInTheDocument();
    });
  });
});
