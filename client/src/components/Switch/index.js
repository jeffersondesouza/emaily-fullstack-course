import React from 'react';

const matchCase = (key, match) => key === match;

const setDefaultElement = (element) => {
  return element.props.default ? element : null;
};

export const Case = ({ children, component: Component, ...res }) => {
  if (children) {
    return <>{children}</>;
  }
  return <Component {...res} />;
};

export const Default = ({ component: Component, ...res }) => {
  return <Component {...res} />;
};

const Switch = ({ switchKey, children }) => {
  let element, defaultEl, hasMatch;

  React.Children.forEach(children, (child, index) => {
    if (!hasMatch && React.isValidElement(child)) {
      element = child;
      defaultEl = setDefaultElement(child);
      hasMatch = matchCase(switchKey, child.props.match);
    }
  });

  return hasMatch
    ? React.cloneElement(element)
    : defaultEl
    ? React.cloneElement(defaultEl)
    : null;
};

export default Switch;
