import { Component } from 'react/cjs/react.production.min';
import FeedbackOptions from './components/FeedBack/FeedBack';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  appendFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  positivePercentage = total => {
    const { good, neutral } = this.state;
    return total ? Math.round(((good + neutral) * 100) / total) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    const positiveFeedback = this.positivePercentage(total);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.appendFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
        />
      </Section>
    );
  }
}
export default App;
