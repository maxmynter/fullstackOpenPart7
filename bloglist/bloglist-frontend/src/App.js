import { useState, useEffect, useRef } from "react";
import { BlogsView } from "./components/BlogsView";
import blogService from "./services/blogs";
import LoginForm from "./components/LoginForm";
import DisplayMessage from "./components/MessageDisplay";
import CreateNewBlog from "./components/CreateNewBlog";
import Togglable from "./components/Toggleable";
import Logout from "./components/Logout";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const addBlogRef = useRef();
  const toggleTogglable = () => {
    addBlogRef.current.toggleVisibility();
  };

  return (
    <div>
      <DisplayMessage />
      {user !== null && (
        <>
          <BlogsView user={user} />
          <Togglable buttonLabel="Create Entry" ref={addBlogRef}>
            <CreateNewBlog
              toggleParentVisibility={toggleTogglable}
              createNewBlogEntry={blogService.addBlog}
            />
          </Togglable>
        </>
      )}
      {user === null && (
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setUser={setUser}
        />
      )}
      {user && <Logout user={user} setUser={setUser} />}
    </div>
  );
};

export default App;
