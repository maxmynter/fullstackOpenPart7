import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsersInfo } from "../reducer/userReducer";

const UserListItem = ({ user }) => {
  const navigate = useNavigate();
  const gotoDetails = () => {
    navigate(`/users/${user.id}`);
  };
  return (
    <p key={"user_info_" + user.name} onClick={gotoDetails}>
      {user.name} {"   "}
      {user.blogs.length}
    </p>
  );
};

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getUsersInfo());
  }, []);
  return (
    <>
      {users.length > 0 && (
        <>
          <h1>Users</h1>
          <h4>
            {"Name"} {" || "} {"N Blogs"}
          </h4>
          {users.map((usr) => (
            <UserListItem user={usr} key={usr.name + "_detail_view"} />
          ))}
        </>
      )}
    </>
  );
};

export default UserView;
