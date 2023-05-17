import axios from "axios";

interface UserCredentials {
  username: string;
  password: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}user/login`,
        userCredentials
      );

      return token;
    } catch (error) {
      throw new Error("Prueba");
    }
  };
  return { getUserToken };
};

export default useUser;
