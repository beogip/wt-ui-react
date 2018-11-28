// @flow
import React from 'react';
import BsTab from 'react-bootstrap/lib/Tab';
import mapDisplayNames from 'utils/componentNames';
import WTContainer from './Container';
import WTContent from './Content';
import WTPane from './Pane';

type PropsType = {
  title: React$Node
};

const WTTab = (props: PropsType) => (
  <BsTab {...props} />
);

WTTab.Container = WTContainer;
WTTab.Content = WTContent;
WTTab.Pane = WTPane;

mapDisplayNames(WTTab);

export default WTTab;
