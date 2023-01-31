import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersInfo } from "../reducer/userReducer";

const UserDetailView = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleDetails = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      {!isClicked ? (
        <p key={"user_info_" + user.name} onClick={toggleDetails}>
          {user.name} {"   "}
          {user.blogs.length}
        </p>
      ) : (
        <div onClick={toggleDetails}>
          <h2>
            {user.name}
            {"'s Blogs"}
          </h2>
          <ul>
            {user.blogs.map((blog) => (
              <li key={"ul_element_blog_" + blog.title}>{blog.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
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
            <UserDetailView user={usr} key={usr.name + "_detail_view"} />
          ))}
        </>
      )}
    </>
  );
};

export default UserView;
