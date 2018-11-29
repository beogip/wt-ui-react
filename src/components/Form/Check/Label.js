/* @flow */
import React from 'react';
import BSFormCheck from 'react-bootstrap/lib/FormCheck';

type PropsType = {
  /**
   *  The HTML for attribute for associating the label with an input
   */
  htmlFor?: string
};

const WTLabel = (props: PropsType) => (<BSFormCheck.Label {...props} />);

WTLabel.defaultProps = {
};

export default WTLabel;
