import React from 'react';
import { motion } from 'framer-motion';

import '../App.css';

const PortfolioItem = ({ title, description, imageSrc, link }) => {
  return (
    <motion.div
      className="portfolio-item"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </motion.div>
  );
};

export default PortfolioItem;
