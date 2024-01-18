import { useReducer } from 'react';
import { countTotalFeedback } from './function/countTotalFeedback';
import { countPositiveFeedbackPercentage } from './function/countPositiveFeedbackPercentage';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './sections/sections';
import { Notification } from './notification/notification';
import css from './feedback.module.css';

function reducer(prevFeedback, { name }) {
  return { ...prevFeedback, [name]: prevFeedback[name] + 1 };
}

export const Feedback = () => {
 const [feedback, changeFeedback] = useReducer(reducer, { good: 0, neutral: 0, bad: 0 });

  const addFeedback = e => {
    const { name } = e.currentTarget;

    changeFeedback({ name: name });
  };

  const total = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(total, feedback);
  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
