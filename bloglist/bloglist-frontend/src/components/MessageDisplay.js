import "../index.css";
import { useSelector } from "react-redux";

const DisplayMessage = () => {
  const message = useSelector((state) => state.notification);
  return <>{message ? <h1 className="message">{message}</h1> : null}</>;
};

export default DisplayMessage;
