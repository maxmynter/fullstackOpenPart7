const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "NOTIFY":
      return action.text;
    case "SILENT":
      return null;
    default:
      return null;
  }
};

export const setNotification = (text) => {
  return {
    type: "NOTIFY",
    text,
  };
};

export const silentNotification = () => {
  return { type: "SILENT" };
};

export default notificationReducer;
