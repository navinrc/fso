import { useState } from "react";

const Feedback = ({ good, setGood, bad, setBad, neutral, setNeutral }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button onclick={() => setGood(good + 1)} label={"good"}></Button>
      <Button
        onclick={() => setNeutral(neutral + 1)}
        label={"neutral"}
      ></Button>
      <Button onclick={() => setBad(bad + 1)} label={"bad"}></Button>
    </>
  );
};

const Button = ({ onclick, label }) => {
  return (
    <>
      <button onClick={onclick}>{label}</button>
    </>
  );
};

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;
  return (
    <>
      <h1>statistics</h1>
      {/* <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={total} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={`${positivePercentage} %`} /> */}
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={`${positivePercentage} %`} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      ></Feedback>
      {!good && !neutral && !bad ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      )}
    </div>
  );
};

export default App;
