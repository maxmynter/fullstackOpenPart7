import { useRef } from "react";
import { useSelector } from "react-redux";
import { BlogsView } from "./BlogsView";
import blogService from "../services/blogs";
import CreateNewBlog from "./CreateNewBlog";
import Togglable from "./Toggleable";
import UserView from "./usersInfo";
const LandingView = () => {
  const user = JSON.parse(useSelector((state) => state.user));

  const addBlogRef = useRef();
  const toggleTogglable = () => {
    addBlogRef.current.toggleVisibility();
  };
  return (
    <>
      {user !== null && (
        <>
          <BlogsView />
          <Togglable buttonLabel="Create Entry" ref={addBlogRef}>
            <CreateNewBlog
              toggleParentVisibility={toggleTogglable}
              createNewBlogEntry={blogService.addBlog}
            />
          </Togglable>
          <UserView />
        </>
      )}
    </>
  );
};

export default LandingView;
