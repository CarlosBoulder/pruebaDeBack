import RobotsStructure from "../../store/robots/types";
import RobotCard from "../RobotCard/RobotCard";
import RobotListStyled from "./RobotsListStyled";

interface RobotsListProps {
  robots: RobotsStructure[];
}

const RobotList = ({ robots }: RobotsListProps): JSX.Element => {
  return (
    <RobotListStyled className="robot-list">
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotListStyled>
  );
};

export default RobotList;
