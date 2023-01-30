const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "NOTIFY":
      return action.notification;
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

export const setNofification = (notification) => {
  return { type: "NOTIFY", notification };
};

export const clearNotification = () => {
  return { type: "CLEAR" };
};

export default notificationReducer;
