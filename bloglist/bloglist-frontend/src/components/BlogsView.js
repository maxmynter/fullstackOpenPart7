import Togglable from "./Toggleable";
import blogService from "../services/blogs";
import { getBlogs } from "../reducer/blogPostReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LikeButton = ({ onClickHandler }) => (
  <button id="likeButton" onClick={onClickHandler}>
    Like
  </button>
);

const Blog = ({ blog, canDelete }) => {
  const dispatch = useDispatch();
  const [displayLikes, setDisplayLikes] = useState(blog.likes);
  const [deleted, setDeleted] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const updateLikesinBackend = () => {
    blogService
      .updateBlog({ ...blog, likes: blog.likes + 1 })
      .then(dispatch(getBlogs()));
  };

  const onClickDelete = (blog) => {
    if (
      window.confirm(`Do you really want to delete the entry ${blog.title}?`)
    ) {
      blogService.deleteBlog(blog.id);
      setDeleted(true);
      dispatch(getBlogs());
    }
  };

  return (
    <>
      {!deleted && (
        <div className="blog" style={blogStyle}>
          {blog.title} {blog.author}
          <Togglable buttonLabel="View Details" hideLabel="Hide">
            <div>URL: {blog.url}</div>
            <div>
              Likes: {displayLikes}{" "}
              <LikeButton
                onClickHandler={() => {
                  setDisplayLikes(displayLikes + 1);
                  updateLikesinBackend();
                }}
              />
            </div>
            <div>Creator: {blog.creator.name}</div>
            {canDelete && (
              <button id="deleteButton" onClick={() => onClickDelete(blog)}>
                Delete
              </button>
            )}
          </Togglable>
        </div>
      )}
    </>
  );
};

const BlogsView = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const user = JSON.parse(useSelector((state) => state.user));
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <>
      <h2>Blogs</h2>
      {[...blogs]
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            canDelete={user.id === blog.creator.id}
          />
        ))}
    </>
  );
};

export { BlogsView, Blog, LikeButton };
