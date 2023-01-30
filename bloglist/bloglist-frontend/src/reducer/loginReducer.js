import setTokens from "../utils/setToken";
const loginReducer = (state = null, action) => {
  switch (action.type) {
    case "SET":
      return action.user;
    default:
      return state;
  }
};

export const setUser = (user) => {
  if (user) {
    setTokens(JSON.parse(user).token);
  }
  return { type: "SET", user };
};

export default loginReducer;
