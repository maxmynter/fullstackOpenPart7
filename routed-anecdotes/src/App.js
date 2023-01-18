import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import AnecdoteList from "./components/AnecdoteList";
import About from "./components/About";
import CreateNew from "./components/CreateNew";
import Menu from "./components/Menu";
import SingleAnecdote from "./components/SingleAnecdote";
import Notification from "./components/Notification";
import { addAnecdote } from "./reducers/blogEntryReducer";

const App = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialAnecdotes = [
      {
        content: "If it hurts, do it more often",
        author: "Jez Humble",
        info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
        votes: 0,
        id: 1,
      },
      {
        content: "Premature optimization is the root of all evil",
        author: "Donald Knuth",
        info: "http://wiki.c2.com/?PrematureOptimization",
        votes: 0,
        id: 2,
      },
    ];
    initialAnecdotes.forEach((anecdote) => {
      dispatch(addAnecdote(anecdote));
    });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <h1>Software anecdotes</h1>
        <Menu />
        <Notification />
      </div>
      <Routes>
        <Route
          path="/anecdotes/:id"
          element={<SingleAnecdote anecdotes={anecdotes} />}
        />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
