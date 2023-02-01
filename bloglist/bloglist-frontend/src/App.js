import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import LandingView from "./components/LandingView";
import BlogsDetailView from "./components/BlogsDetailView";
import LoginForm from "./components/LoginForm";
import DisplayMessage from "./components/MessageDisplay";
import Logout from "./components/Logout";

const LoggedInView = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/blogs/:id" element={<BlogsDetailView />} />
      </Routes>
      <Logout />
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
