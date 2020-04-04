import React, { useState } from 'react';
import Switch, { Case, Default } from '../Switch';
import SwitchErrors, { Error } from '../SwitchErrors';

const Landing = () => {
  const [status, setstatus] = useState(1);
  return (
    <div className="center">
      <h1>Emaily!</h1>
      <p>Collect feedback from your users</p>
    </div>
  );
};

export default Landing;
