
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import About from './About';
import Dashboard from './Dashboard';
import Deposit from './Deposit';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/deposit" component={Deposit} />
      </Switch>
    </Router>
  );
};

export default App;
