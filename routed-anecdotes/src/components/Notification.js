import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { silentNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.notifications);

  useEffect(() => {
    setTimeout(() => {
      dispatch(silentNotification());
    }, 5000);
  });
  return <div>{message}</div>;
};
export default Notification;
