import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import RobotsList from "../RobotList/RobotsList";
import LoginForm from "../LoginForm/LoginForm";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots.robots));
    })();
  }, [dispatch, getRobots]);

  const robotsList = useAppSelector((state) => state.robotStore.robots);
  return (
    <div className="container">
      <h1>Bird Robots</h1>
      <LoginForm />
      <RobotsList robots={robotsList} />
    </div>
  );
};

export default App;
