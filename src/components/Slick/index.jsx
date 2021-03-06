// @flow
import React from 'react';
import Slick from 'react-slick';

/**
 * https://react-slick.neostack.com/docs/api
 */
type PropsType = {
  accessibility?: boolean,
  adaptiveHeight?: boolean,
  afterChange?: (number) => void,
  appendDots?: (React$Node) => React$Node,
  arrows?: boolean,
  autoplay?: boolean,
  autoplaySpeed?: number,
  beforeChange?: (number, number) => void,
  centerMode?: boolean,
  centerPadding?: string,
  className?: string,
  cssEase?: string,
  customPaging?: (number) => React$Node,
  dots?: boolean,
  dotsClass?: string,
  draggable?: boolean,
  easing?: string,
  edgeFriction?: number,
  fade?: boolean,
  focusOnSelect?: boolean,
  infinite?: boolean,
  initialSlide?: number,
  lazyLoad?: 'ondemand' | 'progressive',
  nextArrow?: null,
  onEdge?: null,
  onInit?: void => void,
  onLazyLoadError?: null,
  onReInit?: void => void,
  pauseOnDotsHover?: boolean,
  pauseOnFocus?: boolean,
  pauseOnHover?: boolean,
  prevArrow?: null,
  responsive?: null,
  rows?: number,
  rtl?: boolean,
  slide?: string,
  slidesPerRow?: number,
  slidesToScroll?: number,
  slidesToShow?: number,
  speed?: number,
  swipe?: boolean,
  swipeEvent?: null,
  swipeToSlide?: boolean,
  touchMove?: boolean,
  touchThreshold?: number,
  useCSS?: boolean,
  useTransform?: boolean,
  variableWidth?: boolean,
  vertical?: boolean,
  waitForAnimate?: boolean
};

const WTSlick = (props: PropsType) => <Slick {...props} />;

WTSlick.defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  appendDots: dots => <ul style={{ display: 'block' }}>{dots}</ul>,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  centerPadding: '50px',
  className: '',
  cssEase: 'ease',
  customPaging: i => <button type="button">{i + 1}</button>,
  dots: false,
  dotsClass: 'slick-dots',
  draggable: true,
  easing: 'linear',
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  rows: 1,
  rtl: false,
  slide: 'div',
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true,
};

export default WTSlick;
