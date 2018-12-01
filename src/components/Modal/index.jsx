/* @flow */
import React from 'react';
import BSModal from 'react-bootstrap/lib/Modal';
import mapDisplayNames from 'utils/componentNames';
import WTModalDialog from './Dialog';
import WTBody from './Body';
import WTFooter from './Footer';
import WTHeader from './Header';
import WTTitle from './Title';

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
  onHide?: (SyntheticMouseEvent<*>) => void,
  onEnter?: (SyntheticMouseEvent<*>) => void,
  onEntering?: (SyntheticMouseEvent<*>) => void,
  onEntered?: (SyntheticMouseEvent<*>) => void,
  onExit?: (SyntheticMouseEvent<*>) => void,
  onExiting?: (SyntheticMouseEvent<*>) => void,
  onExited?: (SyntheticMouseEvent<*>) => void,
  children: React$Node
};

const WTModal = (props: PropsType) => {
  const { children, ...restProps } = props;
  return <BSModal {...restProps}>{children}</BSModal>;
};

WTModal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: WTModalDialog,
};

WTModal.Body = WTBody;
WTModal.Header = WTHeader;
WTModal.Title = WTTitle;
WTModal.Footer = WTFooter;
WTModal.Dialog = WTModalDialog;
mapDisplayNames(WTModal);

export default WTModal;
