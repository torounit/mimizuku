/**
 * IF "disable-window-scroll", to set the intended header width.
 */

'use strict';

import $ from 'jquery';

export default class BasisFixedHeader {
  constructor(container, params) {
    params = $.extend({
      container: '._l-container',
      header   : '._l-header'
    }, params);
    this.container = $(params.container)
    this.header    = $(params.header);
    this.isDisableWindowScroll = $('html').hasClass('_disable-window-scroll');

    if (this.shouldSetHeaderWidth()) {
      this.setHeaderWidth();

      $(window).on('resize', (event) => {
        this.setHeaderWidth();
      });
    }
  }

  shouldSetHeaderWidth() {
    const position = this.header.css('position');
    if ('fixed' === position && this.isDisableWindowScroll) {
      return true;
    }
    return false;
  }

  setHeaderWidth() {
    const scrollbarWidth = $('body').innerWidth() - this.container[0].clientWidth;
    if (scrollbarWidth > 0) {
      this.header.width('calc(100% - ' + scrollbarWidth + 'px)');
    }
  }
}
