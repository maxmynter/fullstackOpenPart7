import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
const UserDetailView = () => {
  const users = useSelector((state) => state.allUsers);

  const match = useMatch("/users/:id");
  const user = match ? users.find((user) => user.id === match.params.id) : null;
  if (user) {
    return (
      <>
        <div>
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
      </>
    );
  } else {
    return <div>404: Ooops, something went wrong</div>;
  }
};

export default UserDetailView;
