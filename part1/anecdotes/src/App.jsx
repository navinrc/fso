import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ title, anecdote, vote }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{anecdote}</div>
      <div>{`has ${vote} votes`}</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const votesMap = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesMap);

  const nextRandom = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };

  const incrementVote = () => {
    const votesCopy = { ...votes };
    votesCopy[selected] = votesCopy[selected] + 1;
    setVotes(votesCopy);
  };

  const topRatedAnecdote = () => {
    const indices = Object.keys(votes);
    let topIndex = indices[0];

    indices.forEach((index) => {
      if (votes[index] > votes[topIndex]) {
        topIndex = index;
      }
    });

    return Number(topIndex);
  };

  const topIndex = topRatedAnecdote();

  return (
    <div>
      <Display
        title={"Anecdote of the day"}
        anecdote={anecdotes[selected]}
        vote={votes[selected]}
      />
      <Button onClick={incrementVote} text="vote" />
      <Button onClick={nextRandom} text="next anecdote" />

      <Display
        title={"Anecdote with most votes"}
        anecdote={anecdotes[topIndex]}
        vote={votes[topIndex]}
      />
    </div>
  );
};

export default App;
