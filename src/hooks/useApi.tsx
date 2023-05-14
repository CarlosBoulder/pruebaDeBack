import axios from "axios";

import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const getRobots = useCallback(async () => {
    const { data: robots } = await axios.get(`${apiUrl}robots`);
    return robots;
  }, []);

  return { getRobots };
};

export default useApi;
