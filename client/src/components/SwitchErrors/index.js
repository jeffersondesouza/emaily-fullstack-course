import React from 'react';

export const Error = ({ msg }) => {
  return <div>{msg}</div>;
};

const SwitchErrors = ({ show, children }) => {
  let element, hasMatch;

  React.Children.forEach(children, child => {
    if (show && !hasMatch && React.isValidElement(child)) {
      element = child;

      hasMatch = child.props.show === true;
    }
  });

  return hasMatch && show ? React.cloneElement(element) : null;
};

export default SwitchErrors;
