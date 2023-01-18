import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAnecdote, voteAnecdote } from "../reducers/blogEntryReducer";

const SingleAnecdote = ({ anecdotes, vote }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = Number(useParams().id);
  const anecdoteToDisplay = anecdotes.find((anecdote) => anecdote.id === id);

  const handleDelete = () => {
    dispatch(deleteAnecdote(id));
    navigate("/");
  };
  return (
    <div>
      {!anecdoteToDisplay ? (
        <h3>404: Anecdote with id {id} does not exist</h3>
      ) : (
        <>
          <h2>
            {anecdoteToDisplay.content} by {anecdoteToDisplay.author}
          </h2>
          <div>has {anecdoteToDisplay.votes} votes</div>
          <button onClick={() => voteAnecdote(id)}> Vote </button>
          <button onClick={handleDelete}>Delete</button>
          <div>
            for more info see{" "}
            <a href={anecdoteToDisplay.info}>{anecdoteToDisplay.info}</a>
          </div>
        </>
      )}
    </div>
  );
};
export default SingleAnecdote;
