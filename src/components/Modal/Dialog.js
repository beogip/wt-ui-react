/* @flow */
import React from 'react';
import BSModalDialog from 'react-bootstrap/lib/ModalDialog';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  size?: 'sm' | 'lg' | 'large' | 'small',
  centered: boolean,
  className: string,
  children: React$Node
};

const WTDialog = (props: PropsType) => {
  const { children, ...restProps } = props;
  return (<BSModalDialog {...restProps}>{children}</BSModalDialog>);
};

WTDialog.defaultProps = {
  centered: true,
};


export default WTDialog;
