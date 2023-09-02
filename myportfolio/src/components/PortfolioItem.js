import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioItem({ title, description, imageSrc, link }) {
  return (
    <div className="portfolio-item">
      <Link to={link}>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default PortfolioItem;
