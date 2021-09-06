import PropTypes from "prop-types";

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <div className="statistics">
      {good || bad || neutral ? (
        <ul className="statistics__list">
          <li className="statistics__item">Good: {good}</li>
          <li className="statistics__item">Bad: {bad}</li>
          <li className="statistics__item">Neutral: {neutral}</li>
          <li className="statistics__item">Total: {total}</li>
          <li className="statistics__item">
            Positive feedback:
            {good ? positivePercentage : 0} %
          </li>
        </ul>
      ) : (
        <h3 className="statistics__title-notification">No feedback given</h3>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
