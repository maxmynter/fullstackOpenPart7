import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const CreateNew = (props) => {
  const dispatch = useDispatch();

  const { reset: resetContent, ...content } = useField("content");
  const { reset: resetAuthor, ...author } = useField("author");
  const { reset: resetInfo, ...info } = useField("info");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate("/");

    dispatch(setNotification(`Created anecdote ${content.value}`));
  };
  const handleReset = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
