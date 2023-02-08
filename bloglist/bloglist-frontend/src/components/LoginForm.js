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
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <h3>Username</h3>

          <input
            id="usernameInput"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            id="passwordInput"
            type="text"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
