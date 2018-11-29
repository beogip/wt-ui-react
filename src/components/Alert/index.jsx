/* @flow */
import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import WTLink from './Link';
import WTHeading from './Heading';

type PropsType = {
  dismissible?: boolean,
  show?: boolean,
  onClose?: SyntheticMouseEvent<*> => void,
  closeLabel?: string,
  children: React$Node,
  variant: 'primary' | 'accent' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
};

const WTAlert = (props: PropsType) => {
  const {
    children, ...others
  } = props;

  return (
    <Alert {...others}>
      {children}
    </Alert>
  );
};

WTAlert.defaultProps = {
  variant: 'primary',
};

WTAlert.Link = WTLink;
WTAlert.Heading = WTHeading;

export default WTAlert;
