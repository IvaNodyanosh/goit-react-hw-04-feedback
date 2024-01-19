import { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './sections/sections';
import { Notification } from './notification/notification';
import css from './App.module.css';

export const Feedback = () => {
  const [feedback, changeFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = e => {
    const { name } = e.currentTarget;

    changeFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = (total, { good }) => {
    if (total === 0) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
  };

  const countTotalFeedback = totalObject => {
    let total = 0;

    for (const key in totalObject) {
      total += totalObject[key];
    }

    return total;
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
