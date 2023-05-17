import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";
interface UserLoginState {
  username: string;
  password: string;
}
interface LoginFormProps {
  submitForm: (user: UserLoginState) => void;
}

const LoginForm = ({ submitForm }: LoginFormProps): JSX.Element => {
  const initialUserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState<UserLoginState>(
    initialUserCredentials
  );

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      username: event.target.value,
    });
  };

  const onChangeUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      password: event.target.value,
    });
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  return (
    <LoginFormStyled className="user-form" onSubmit={handleLoginSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Name:</label>
        <input
          id="username"
          type="text"
          onChange={onChangeUserName}
          value={userCredentials.username}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          onChange={onChangeUserPassword}
          value={userCredentials.password}
        />
      </div>
      <Button text="Send" className="form-btn" />
    </LoginFormStyled>
  );
};

export default LoginForm;
