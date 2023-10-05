import PropTypes from 'prop-types';

export const Head = ({ clas, id }) => {
    return (
      <p className={clas} id={id}>
        I am Head
      </p>
    );
  };

  Head.propTypes = {
    clas: PropTypes.string,
    id: PropTypes.string,
  }