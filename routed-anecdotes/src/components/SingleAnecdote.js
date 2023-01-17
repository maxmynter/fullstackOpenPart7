import { useParams } from "react-router-dom";

const SingleAnecdote = ({ anecdotes, vote }) => {
  const id = Number(useParams().id);
  const anecdoteToDisplay = anecdotes.find((anecdote) => anecdote.id === id);
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
          <button onClick={() => vote(id)}> Vote </button>
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
