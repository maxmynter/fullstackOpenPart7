import { useRef } from "react";
import { BlogsView } from "./components/BlogsView";
import blogService from "./services/blogs";
import LoginForm from "./components/LoginForm";
import DisplayMessage from "./components/MessageDisplay";
import CreateNewBlog from "./components/CreateNewBlog";
import Togglable from "./components/Toggleable";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";
import UserView from "./components/usersInfo";

const App = () => {
  const user = JSON.parse(useSelector((state) => state.user));

  const addBlogRef = useRef();
  const toggleTogglable = () => {
    addBlogRef.current.toggleVisibility();
  };

  return (
    <div>
      <DisplayMessage />
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
          <Logout />
        </>
      )}
      {user === null && <LoginForm />}
    </div>
  );
};

export default App;
