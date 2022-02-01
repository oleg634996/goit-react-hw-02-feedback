import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {' '}
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
