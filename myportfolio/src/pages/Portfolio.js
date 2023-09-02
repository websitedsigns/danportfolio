import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const portfolioData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageSrc: 'project1.jpg',
    link: '/project1',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageSrc: 'project2.jpg',
    link: '/project2',
  },
  // Add more portfolio items
];

function Portfolio() {
  return (
    <div className="portfolio">
      {portfolioData.map((item, index) => (
        <PortfolioItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Portfolio;
