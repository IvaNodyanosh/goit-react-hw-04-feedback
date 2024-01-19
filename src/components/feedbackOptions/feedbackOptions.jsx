import css from './feedbackOptions.module.css';

import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { BsFillEmojiNeutralFill } from 'react-icons/bs';
import { BsFillEmojiFrownFill } from 'react-icons/bs';

const emoji = {
  good: <BsFillEmojiSmileFill className={css.feedbackIcon__good} />,
  neutral: <BsFillEmojiNeutralFill className={css.feedbackIcon__neutral} />,
  bad: <BsFillEmojiFrownFill className={css.feedbackIcon__bad} />,
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback__list}>
      {options.map(option => (
        <li key={option}>
          <button
            onClick={e => onLeaveFeedback(e)}
            name={option}
            className={css.feedback__button}
          >
            {emoji[option]}
          </button>
        </li>
      ))}
    </ul>
  );
};
