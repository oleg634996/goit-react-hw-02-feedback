import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
