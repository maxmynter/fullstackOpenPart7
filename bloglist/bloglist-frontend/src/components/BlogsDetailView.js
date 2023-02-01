import { useState } from "react";
import { useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../reducer/blogPostReducer";
import blogService from "../services/blogs";
import { LikeButton } from "./BlogsView";

const BlogsDetailView = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const match = useMatch("/blogs/:id");
  const blog = match ? blogs.find((blog) => blog.id === match.params.id) : null;

  if (blog) {
    const [displayLikes, setDisplayLikes] = useState(blog.likes);

    const likeBlog = () => {
      blogService
        .updateBlog({ ...blog, likes: blog.likes + 1 })
        .then(dispatch(getBlogs()));
    };
    return (
      <div>
        <h1>{blog.title}</h1>
        <h2>by: {blog.author}</h2>
        <div>has {displayLikes} Likes</div>
        <LikeButton
          onClickHandler={() => {
            setDisplayLikes(displayLikes + 1);
            likeBlog();
          }}
        />
        <div>URL: {blog.url}</div>
      </div>
    );
  } else {
    return <div>404: Ooops, something went wrong</div>;
  }
};
export default BlogsDetailView;
