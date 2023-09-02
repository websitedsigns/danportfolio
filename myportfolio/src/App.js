import React from 'react';
import Header from './components/Header';
import PortfolioItem from './components/PortfolioItems';

const App = () => {
  const portfolioData = [
    {
      title: 'Restaurant App',
        description: 'Restaurant App',
        imageSrc: `${process.env.PUBLIC_URL}/images/littlelemonapp.png`,
      link: 'https://littlelemonlondon.netlify.app/',
    },
    // Add more portfolio items here
    {
        title: 'Calculator App',
        description: 'Calculator App, using React',
        imageSrc: `${process.env.PUBLIC_URL}/images/calc.png`, // Use process.env.PUBLIC_URL to reference images in public folder
        link: 'https://calculatereact.netlify.app/',
      },

      {
        title: 'Weather App',
        description: 'Interactive weather App',
        imageSrc: `${process.env.PUBLIC_URL}/images/weather.png`, // Use process.env.PUBLIC_URL to reference images in public folder
        link: 'https://calculatereact.netlify.app/',
      },


  ];

  return (
    <div className="App">
      <Header />
      <section className="portfolio">
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default App;
