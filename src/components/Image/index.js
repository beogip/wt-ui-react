// @flow
import React from 'react';
import BSImage from 'react-bootstrap/lib/Image';

type PropsType = {
  /**
   * Sets image as fluid image.
   */
  fluid: boolean,
  /**
   * Sets image shape as rounded.
   */
  rounded: boolean,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: boolean,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: boolean
};

const WTImage = (props: PropsType) => (<BSImage {...props} />);

WTImage.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false,
};

export default WTImage;
