import blogService from "../services/blogs";
import userService from "../services/users";
const setTokens = (token) => {
  blogService.setToken(token);
  userService.setToken(token);
};

export default setTokens;
