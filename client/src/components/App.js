import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import Landing from './Landing';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, []);

  return (
    <div className="container">
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
    </div>
  );
}

export default App;
