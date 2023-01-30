import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersInfo } from "../reducer/userReducer";

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getUsersInfo());
  }, []);
  return (
    <>
      <h1>Users</h1>
      {users.length > 0 && (
        <h4>
          {"Name"} {"   "} {"# Blogs"}
        </h4>
      )}
      {users.length > 0 &&
        users.map((usr) => (
          <p key={"user_info_" + usr.name}>
            {usr.name} {"   "}
            {usr.blogs.length}
          </p>
        ))}
    </>
  );
};

export default UserView;
