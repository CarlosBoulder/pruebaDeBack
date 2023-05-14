import RobotsStructure from "../../store/robots/types";

interface RobotCardProps {
  robot: RobotsStructure;
}

const RobotCard = ({
  robot: { name, imgSource, created, endurance, speed },
}: RobotCardProps): JSX.Element => {
  return (
    <section>
      <img src={imgSource} alt={name} />
      <h2>{name}</h2>
      <span>Speed: {speed}</span>
      <span>Endurance: {endurance}</span>
      <span>Created: {created}</span>
    </section>
  );
};

export default RobotCard;
