import { useParams } from "react-router-dom";

const SingleAnecdote = ({ anecdotes }) => {
  const id = Number(useParams().id);
  const anecdoteToDisplay = anecdotes.find((anecdote) => anecdote.id === id);
  return (
    <div>
      <h2>
        {anecdoteToDisplay.content} by {anecdoteToDisplay.author}
      </h2>
      <div>has {anecdoteToDisplay.votes} votes</div>
      <div>
        for more info see{" "}
        <a href={anecdoteToDisplay.info}>{anecdoteToDisplay.info}</a>
      </div>
    </div>
  );
};
export default SingleAnecdote;
