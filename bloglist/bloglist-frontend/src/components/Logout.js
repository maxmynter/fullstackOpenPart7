const Logout = ({ user, setUser }) => {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogAppUser");
    setUser(null);
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
