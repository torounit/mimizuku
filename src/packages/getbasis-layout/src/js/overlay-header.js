/**
 * This is for the overlay header.
 * If scroll the page, added a class "is-scrolled".
 */

'use strict';

import $ from 'jquery';

export default class BasisOverlayHeader {
  constructor(params) {
    this.params = $.extend({
      container   : '._l-container',
      header      : '._l-header',
      stickyClass : '_l-header--sticky',
      overlayClass: '_l-header--overlay',
      scrollClass : '_l-header--is-scrolled'
    }, params);
    this.container = $(this.params.container);
    this.header    = $(this.params.header);
    this.isDisableWindowScroll = $('html').hasClass('_disable-window-scroll');

    this.setClassForScroll();
    this.setClassForSticky();
    this.setListener();
  }

  setListener() {
    const target = this.getScrollTarget();

    target.on('scroll resize', (event) => {
      this.setClassForScroll();
      this.setClassForSticky();
    });
  }

  setClassForScroll() {
    const scroll = this.getScrollTop();

    if (scroll > 0) {
      this.header.addClass(this.params.scrollClass);
    } else {
      this.header.removeClass(this.params.scrollClass);
    }
  }

  setClassForSticky() {
    const scroll = this.getScrollTop();

    if (this.header.hasClass(this.params.stickyClass)) {
      const headerHeight = this.header.outerHeight();
      if (scroll > 0) {
        this.header.next().css('paddingTop', headerHeight + 'px');
        this.header.addClass(this.params.overlayClass);
      } else {
        this.header.next().css('paddingTop', '');
        this.header.removeClass(this.params.overlayClass);
      }
    } else {
      this.header.next().css('paddingTop', '');
    }
  }

  getScrollTarget() {
    if (this.isDisableWindowScroll) {
      return this.container;
    } else {
      return $(window);
    }
  }

  getScrollTop() {
    const target = this.getScrollTarget();
    return target.scrollTop();
  }
}
