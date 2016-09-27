'use strict';

import $ from 'jquery';

export default class BasisDrawer {
  constructor(params) {
    this.params = $.extend({
      container    : '._c-drawer',
      drawer       : '._c-drawer__body',
      btn          : '._c-drawer__btn',
      toggleSubmenu: '._c-drawer__toggle'
    }, params);
    this.container = $(this.params.container);
    this.setListener();
  }

  setListener() {
    this.container.each((i, e) => {
      const container = $(e);
      const drawer    = container.find(this.params.drawer).eq(0);
      const btn       = container.find(this.params.btn).eq(0);

      container.on('click', (event) => {
        this.close(drawer);
        btn.removeClass('is-close');
      });

      drawer.on('click', (event) => {
        event.stopPropagation();
      });

      btn.on('click', (event) => {
        this.toggle(drawer);
        btn.toggleClass('is-close');
        event.stopPropagation();
      });

      $(window).on('resize', (event) => {
        this.close(drawer);
        btn.removeClass('is-close');
      });

      const hasSubMenu = drawer.find('[aria-expanded]');
      hasSubMenu.each((i, e) => {
        const target = $(e);
        const toggleSubmenu = $(e).children(this.params.toggleSubmenu);
        if (toggleSubmenu.length) {
          toggleSubmenu.on('click', (event) => {
            this.toggle(target);
            event.stopPropagation();
          });
        }
      });
    });
  }

  toggle(drawer) {
    event.preventDefault();
    if (drawer.attr('aria-expanded') === 'false') {
      this.open(drawer);
    } else {
      this.close(drawer);
    }
  }

  open(drawer) {
    drawer.attr('aria-expanded', 'true');
  }

  close(drawer) {
    drawer.attr('aria-expanded', 'false');
    const hasSubitems = drawer.find('[aria-expanded]');
    hasSubitems.each((i, e) => {
      this.close($(e));
    });
  }
}
