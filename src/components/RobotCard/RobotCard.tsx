import RobotsStructure from "../../store/robots/types";

interface RobotCardProps {
  robot: RobotsStructure;
}

const RobotCard = ({
  robot: { name, imgSource, created, endurance, speed },
}: RobotCardProps): JSX.Element => {
  return (
    <article className="robot-card">
      <img rel="preload" src={imgSource} alt={name} width={285} height={285} />
      <h2>{name}</h2>
      <p>Speed: {speed}</p>
      <p>Endurance: {endurance}</p>
      <p>Created: {created}</p>
    </article>
  );
};

export default RobotCard;
