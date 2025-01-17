// src/components/Card.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="col-md-4">
      <Link to={link} className="card-link">
        <div className="card mb-4 shadow-sm card-hover">
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
