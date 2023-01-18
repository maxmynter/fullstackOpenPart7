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
  console.log("Voting", anecdoteID);
  return {
    type: "VOTE",
    id: anecdoteID,
  };
};

export default anecdoteEntryReducer;
