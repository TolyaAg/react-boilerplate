import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './views/main';

import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  </div>
);

export default App;
