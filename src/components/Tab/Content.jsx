// @flow
import React from 'react';
import BsTabContent from 'react-bootstrap/lib/TabContent';

type PropsType = {
  as: React$Element<*> | string
};

const WTContent = (props: PropsType) => (
  <BsTabContent {...props} />
);

WTContent.defaultProps = {
  as: 'div',
};

export default WTContent;
