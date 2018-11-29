/* @flow */
import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string
};

const WTLink = (props: PropsType) => (<Alert.Link {...props} />);

WTLink.defaultProps = {
  as: 'a',
};


export default WTLink;
