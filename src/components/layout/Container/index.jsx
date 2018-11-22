/* @flow */
import React from 'react';
import BSContainer from 'react-bootstrap/lib/Container';

type PropsType = {
  fluid: boolean,
  children: React$Node
};

const WTContainer = (props: PropsType) => {
  const {
    children, ...otherProps
  } = props;

  return (
    <BSContainer {...otherProps}>
      {children}
    </BSContainer>
  );
};

WTContainer.defaultProps = {
  fluid: false,
};

export default WTContainer;
