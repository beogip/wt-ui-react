/* @flow */

import React from 'react';

import { storiesOf } from '@storybook/react';
import Slick from 'components/Slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const stories = storiesOf('Slick', module);

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 1,
  cssEase: 'linear',
  adaptiveHeight: true,
};

stories
  .add('Dual Slick', () => (
    <>
      <Slick {...settings}>
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
      </Slick>
      <Slick {...settings} rtl>
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img srec="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-grad%402x.png" alt="" />
        <img src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/full-logo/png/wt-black%402x.png" alt="" />
      </Slick>
    </>
  ));
