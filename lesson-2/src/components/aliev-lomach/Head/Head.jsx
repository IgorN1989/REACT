import PropTypes from 'prop-types';

export const Head = ({ clas, id, children }) => {
  return (
    <>
    {children}
      <p className={clas} id={id}>
        I am Head
      </p>
    </>
  );
};

Head.propTypes = {
  clas: PropTypes.string,
  id: PropTypes.string,
};
    