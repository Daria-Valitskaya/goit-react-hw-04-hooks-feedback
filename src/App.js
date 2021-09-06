import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOption from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (value) => {
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  positivePercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={options}
            handleFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
