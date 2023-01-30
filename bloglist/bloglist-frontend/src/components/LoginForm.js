import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import loginService from "../services/login";
import blogService from "../services/blogs";
import {
  setNofification,
  clearNotification,
} from "../reducer/notificationReducer";

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  setUser,
}) => {
  const dispatch = useDispatch();
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
      setUser(user);
      blogService.setToken(user.token);
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

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
