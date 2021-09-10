import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOption from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (value) => {
    switch (value) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const positivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const options = ["good", "bad", "neutral"];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOption options={options} handleFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={positivePercentage()}
        />
      </Section>
    </div>
  );
}
