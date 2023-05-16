import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";

const LoginForm = (): JSX.Element => {
  interface UserLoginState {
    username: string;
    password: string;
  }

  const [userState, setUserState] = useState<UserLoginState>({
    username: "",
    password: "",
  });

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      username: event.target.value,
    });
  };

  const onChangeUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      password: event.target.value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <LoginFormStyled className="user-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Name:</label>
        <input id="username" type="text" onChange={onChangeUserName} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" onChange={onChangeUserPassword} />
      </div>
      <Button text="Send" className="form-btn" />
    </LoginFormStyled>
  );
};

export default LoginForm;
