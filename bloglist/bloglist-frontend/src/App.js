import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import LandingView from "./components/LandingView";
import BlogsDetailView from "./components/BlogsDetailView";
import LoginForm from "./components/LoginForm";
import DisplayMessage from "./components/MessageDisplay";
import Logout from "./components/Logout";
import UserView from "./components/UserView";
import UserDetailView from "./components/UserDetailView";

const LoggedInView = () => {
  const style = {
    backgroundColor: "grey",
    color: "white",
  };
  return (
    <>
      <div style={style}>
        <Link to="/">Home</Link> <Link to="/users">Users</Link>
        <Logout />
      </div>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/blogs/:id" element={<BlogsDetailView />} />
        <Route path="/users" element={<UserView />} />
        <Route path="/users/:id" element={<UserDetailView />} />
      </Routes>
    </>
  );
};

const App = () => {
  const user = JSON.parse(useSelector((state) => state.user));

  return (
    <div>
      <DisplayMessage />
      {user !== null && <LoggedInView />}
      {user === null && <LoginForm />}
    </div>
  );
};

export default App;
