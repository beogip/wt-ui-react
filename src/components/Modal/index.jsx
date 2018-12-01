/* @flow */
import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalDialog from './Dialog';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Title from './Title';

type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  size: 'sm' | 'lg' | 'large' | 'small',
  centered: boolean,
  backdrop?: boolean,
  backdropClassName: string,
  keyboard?: boolean,
  animation?: boolean,
  dialogClassName: string,
  dialogAs?: React$ComponentType<*> | string,
  autoFocus?: boolean,
  enforceFocus?: boolean,
  restoreFocus?: boolean,
  show?: boolean,
  onHide: SyntheticMouseEvent<*> => void,
  onEnter: SyntheticMouseEvent<*> => void,
  onEntering: SyntheticMouseEvent<*> => void,
  onEntered: SyntheticMouseEvent<*> => void,
  onExit: SyntheticMouseEvent<*> => void,
  onExiting: SyntheticMouseEvent<*> => void,
  onExited: SyntheticMouseEvent<*> => void,
  children: React$Node
};

const WTModal = (props: PropsType) => {
  const { children, ...restProps } = props;
  return <Modal {...restProps}>{children}</Modal>;
};

WTModal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog,
};

WTModal.Body = Body;
WTModal.Header = Header;
WTModal.Title = Title;
WTModal.Footer = Footer;
WTModal.Dialog = ModalDialog;

export default WTModal;
