import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducer/loginReducer";
const Logout = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(useSelector((state) => state.user));
  const handleLogout = () => {
    dispatch(setUser(null));
  };
  return (
    <div>
      {user.name} is logged in
      <button id="logoutButton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
