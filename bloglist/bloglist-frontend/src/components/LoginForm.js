import { useDispatch } from "react-redux";
import { useState } from "react";
import loginService from "../services/login";
import {
  setNofification,
  clearNotification,
} from "../reducer/notificationReducer";
import { setUser } from "../reducer/loginReducer";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      dispatch(
        setUser(
          JSON.stringify({
            name: user.name,
            token: user.token,
            username: user.username,
            id: user.id,
          })
        )
      );
      setUsername("");
      setPassword("");
    } catch (exception) {
      dispatch(setNofification("Wrong credentials"));
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        Username
        <input
          id="usernameInput"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        Password
        <input
          id="passwordInput"
          type="text"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
