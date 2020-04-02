import React, { useState } from 'react';
import Switch, { Case, Default } from '../Switch';
import SwitchErrors, { Error } from '../SwitchErrors';

export const C1 = ({ title }) => <div>C1: {title}</div>;
export const C2 = () => <div>C2</div>;
export const C3 = () => <div>C3</div>;
export const C4 = () => <div>C4</div>;
export const D = () => <div>default</div>;

const Landing = () => {
  const [status, setstatus] = useState(1);
  /* return (
    <div className="center">
      <h1>Emaily!</h1>
      <p>Collect feedback from your users</p>
    </div>
  ); */

  return (
    <div>
      {status}
      <input
        type="number"
        value={status}
        onChange={({ target }) => setstatus(target.value)}
      />

      <SwitchErrors>
        <Error msg="Error 1" show={false} />
        <Error msg="Error 2" show={false} />
        <Error msg="Error 3" show={false} />
        <Error msg="Error 4" show />
      </SwitchErrors>

      <div>Switch</div>
      <Switch switchKey={status}>
        <Case match={1}>
          <C1 title="kgkjg" />
        </Case>
        <Case match={2} component={C2} />
        <Case match={3} component={C3} />
        <Case match={4} component={C4} />
        <Case default component={D} />
      </Switch>
    </div>
  );
};

export default Landing;
