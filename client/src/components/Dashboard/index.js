import React from 'react';
import { NavLink } from 'react-router-dom';
import SurveyList from '../SurveyList';

const Dashboard = () => {
  return (
    <div>
      <div>
        <SurveyList />
      </div>
      <div className="fixed-action-btn">
        <NavLink to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
