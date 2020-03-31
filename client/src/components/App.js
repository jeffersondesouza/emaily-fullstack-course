import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import Landing from './Landing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
