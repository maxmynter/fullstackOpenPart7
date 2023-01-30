import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setNofification,
  clearNotification,
} from "../reducer/notificationReducer";
import { getBlogs } from "../reducer/blogPostReducer";

const CreateNewBlog = ({ toggleParentVisibility, createNewBlogEntry }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createNewBlogEntry({ title, author, url });
    dispatch(getBlogs());
    dispatch(setNofification(`${response.statusText}`));
    toggleParentVisibility();
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
    setTitle("");
    setAuthor("");
    setURL("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Entry </h2>
      <div>
        Title:{" "}
        <input
          id="titleInput"
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        ></input>
      </div>
      <div>
        Author:{" "}
        <input
          id="authorInput"
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        ></input>
      </div>
      <div>
        URL:{" "}
        <input
          id="urlInput"
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setURL(target.value)}
        ></input>
      </div>
      <button id="createNewBlogButton">Create</button>
    </form>
  );
};

export default CreateNewBlog;
