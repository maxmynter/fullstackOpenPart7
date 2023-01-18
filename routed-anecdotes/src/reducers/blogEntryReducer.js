const anecdoteEntryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.anecdote);
    case "VOTE":
      return state.map((anecdote) =>
        anecdote.id === action.id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      );
    case "DELETE":
      return state.filter((anecdote) => anecdote.id !== action.id);
    default:
      return state;
  }
};

export const addAnecdote = (anecdote) => {
  anecdote.id = Math.round(Math.random() * 10000);
  return {
    type: "ADD",
    anecdote,
  };
};

export const voteAnecdote = (anecdoteID) => {
  return {
    type: "VOTE",
    id: anecdoteID,
  };
};

export const deleteAnecdote = (anecdoteID) => {
  return {
    type: "DELETE",
    id: anecdoteID,
  };
};

export default anecdoteEntryReducer;
