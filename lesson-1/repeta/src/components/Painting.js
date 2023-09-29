import PropTypes from 'prop-types';
import defaultImage from './default-image.png';

export default function Painting(props) {
  const { imageUrl = defaultImage, title, profileUrl, author = 'unknown', price, quantity } = props;
  return (
    <div>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price}$</p>
      <p>Available: {quantity < 10 ? 'Ending' : "On Sale"}</p>
      <button type="button">Add to basket</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
