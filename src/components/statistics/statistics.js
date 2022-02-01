import Notification from '../notification/notification';
import PropTypes from 'prop-types';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      {total > 0 ? (
        <ul>
          <li>good:{good}</li>
          <li>neutral:{neutral}</li>
          <li>bad:{bad}</li>
          <li>total:{total}</li>
          <li>Positive feedback:{positivePercentage}</li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
