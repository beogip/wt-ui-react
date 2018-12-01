/* @flow */
import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTHeading = (props: PropsType) => (<Alert.Heading {...props} />);

WTHeading.defaultProps = {
  as: 'h4',
};


export default WTHeading;
