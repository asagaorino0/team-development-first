import React from 'react';
// import React , { useState, useContext } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
// import { Login } from './pages/Login';
import { BrowserRouter as Router, MemoryRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Router>
          <Header />
          {/* <Login /> */}
          {/* <PageA /> */}
          {/* <PageB /> */}
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route exact path='/PageA' component={PageA} />
            <Route exact path='/PageB' component={PageB} />
            <Route exact path='/PageC' component={PageC} />
            <Route exact path='/Header/:nameH' component={Header} />
          </Switch>
        </Router>
      </MemoryRouter>
    </div >
  );
}

export default App;
