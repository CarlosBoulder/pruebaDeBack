import axios from "axios";
import { useCallback } from "react";
import RobotsStructure from "../store/robots/types";

const apiUrl = import.meta.env.VITE_API_URL;

export interface RobotsStateStructure {
  robots: RobotsStructure[];
}

const useApi = () => {
  const getRobots = useCallback(async (): Promise<RobotsStateStructure> => {
    const { data: robots } = await axios.get(`${apiUrl}robots`);

    return robots;
  }, []);

  return { getRobots };
};

export default useApi;
