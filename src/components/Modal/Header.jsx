/* @flow */
import React from 'react';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  closeButton: boolean,
  closeLabel: string,
  onHide: SyntheticMouseEvent<*> => void,
  children: React$Node
};

const WTHeader = (props: PropsType) => {
  const { children, ...restProps } = props;
  return (<ModalHeader {...restProps}>{children}</ModalHeader>);
};

WTHeader.defaultProps = {
  closeLabel: 'Close',
  closeButton: false,
};


export default WTHeader;
