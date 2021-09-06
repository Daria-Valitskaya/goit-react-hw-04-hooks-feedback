import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";
export default function FeedbackOption({ options, handleFeedback }) {
  return (
    <div className={style.btn__wrapper}>
      {options.map((option, index) => (
        <button
          type="button"
          key={index}
          name={option}
          onClick={() => handleFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
