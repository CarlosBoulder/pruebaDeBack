import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import RobotsList from "../RobotList/RobotsList";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const robots = await getRobots();
        dispatch(loadRobotsActionCreator(robots));
      } catch {
        return;
      }
    })();
  }, [dispatch, getRobots]);

  return (
    <>
      <h1>Bird Robots</h1>
      <RobotsList />
    </>
  );
};

export default App;
