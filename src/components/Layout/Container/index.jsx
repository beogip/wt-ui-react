/* @flow */
import React from 'react';
import Container from 'react-bootstrap/lib/Container';

type PropsType = {
  as: React$Node,
  fluid: boolean,
  prefix: string,
  children: React$Node
};

const WTContainer = (props: PropsType) => {
  const {
    children, ...otherProps
  } = props;

  return (
    <Container {...otherProps}>
      {children}
    </Container>
  );
};

WTContainer.defaultProps = {
  as: '<div>',
  fluid: false,
  prefix: 'container',
};

export default WTContainer;
