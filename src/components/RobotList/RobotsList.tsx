import robotsMock from "../../mocks/robotsMock";
import RobotListStyled from "./RobotsListStyled";

const RobotList = (): JSX.Element => {
  return (
    <RobotListStyled className="robot-list">
      {robotsMock.map((robot) => (
        <li key={robot.id}>
          <h2>{robot.name}</h2>
          <img
            alt={`${robot.name} portrait`}
            src={robot.imgSource}
            width={300}
            height={300}
          />
        </li>
      ))}
    </RobotListStyled>
  );
};

export default RobotList;
