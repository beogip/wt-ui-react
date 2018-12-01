/* @flow */
import React from 'react';
import mapDisplayNames from 'utils/componentNames';

import IconList from './IconList';
import Copyright from './Copyright';
import Logo from './Logo';
import About from './About';
import Comunity from './Comunity';
import Contacts from './Contacts';
import Developers from './Developers';
import LifToken from './LifToken';
import Solutions from './Solutions';

import './styles.scss';

type PropsType = {
  children: React$Node
};

const WTFooter = (props: PropsType) => {
  const { children } = props;
  return (
    <footer className="footer bg-accent text-white">
      <div className="container">
        <div className="footer__row pt-2 pb-1">
          <div className="row">
            <Logo />
            <div className="col-md-8">
              <div className="row">
                {children}
              </div>
            </div>
          </div>
        </div>
        <hr className="text-alpha" />
        <div className="py-1">
          <div className="d-flex flex-column-reverse flex-md-row align-items-center">
            <Copyright />
            <IconList />
          </div>
        </div>
      </div>
    </footer>
  );
};

WTFooter.About = About;
WTFooter.Comunity = Comunity;
WTFooter.Contacts = Contacts;
WTFooter.Developers = Developers;
WTFooter.LifToken = LifToken;
WTFooter.Solutions = Solutions;

mapDisplayNames(WTFooter);

export default WTFooter;
