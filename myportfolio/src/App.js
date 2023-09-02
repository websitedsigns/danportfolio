import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        {/* Add more routes for individual projects */}
      </Switch>
    </Router>
  );
}

export default App;
