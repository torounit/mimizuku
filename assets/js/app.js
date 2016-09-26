(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _drawer = require('../packages/getbasis-drawer/src/js/drawer.js');

var _drawer2 = _interopRequireDefault(_drawer);

var _menu = require('../packages/getbasis-menu/src/js/menu.js');

var _menu2 = _interopRequireDefault(_menu);

var _overlayHeader = require('../packages/getbasis-layout/src/js/overlay-header.js');

var _overlayHeader2 = _interopRequireDefault(_overlayHeader);

var _fixAdminbar = require('./fix-adminbar.js');

var _fixAdminbar2 = _interopRequireDefault(_fixAdminbar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

new _drawer2.default();

new _menu2.default();

new _overlayHeader2.default();

new _fixAdminbar2.default();

},{"../packages/getbasis-drawer/src/js/drawer.js":3,"../packages/getbasis-layout/src/js/overlay-header.js":4,"../packages/getbasis-menu/src/js/menu.js":5,"./fix-adminbar.js":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _jquery = typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null;

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var FixAdminBar = function () {
	function FixAdminBar() {
		var _this = this;

		_classCallCheck(this, FixAdminBar);

		this.min = 599;
		this.container = (0, _jquery2.default)('._l-container--sticky-footer');
		this.header = (0, _jquery2.default)('._l-header');
		this.contents = (0, _jquery2.default)('._l-contents');

		(0, _jquery2.default)(function () {
			_this.adminBar = (0, _jquery2.default)('#wpadminbar');

			if (_this.adminBar.length) {
				_this.fixHeaderPosition();
				_this.fixStickyFooter();
				_this.setListener();
			}
		});
	}

	_createClass(FixAdminBar, [{
		key: 'setListener',
		value: function setListener() {
			var _this2 = this;

			(0, _jquery2.default)(window).resize(function () {
				_this2.fixHeaderPosition();
				_this2.fixStickyFooter();
			});

			(0, _jquery2.default)(window).scroll(function () {
				_this2.fixHeaderPosition();
			});
		}
	}, {
		key: 'fixHeaderPosition',
		value: function fixHeaderPosition() {
			var scroll = (0, _jquery2.default)(window).scrollTop();

			if ((0, _jquery2.default)(window).outerWidth() < this.min) {
				if (this.adminBar.outerHeight() <= scroll) {
					this.header.css('top', 0);
				} else {
					this.header.removeClass('_l-header--overlay');
					this.header.css('top', '');
					this.header.next().css('padding-top', 0);
				}
			} else {
				this.header.css('top', '');
			}
		}
	}, {
		key: 'fixStickyFooter',
		value: function fixStickyFooter() {
			var adminbar_height = parseInt(this.adminBar.outerHeight()) + 'px';
			this.container.css('min-height', 'calc(100vh - ' + adminbar_height + ')');
		}
	}]);

	return FixAdminBar;
}();

exports.default = FixAdminBar;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null;

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BasisDrawer = function () {
  function BasisDrawer(container, params) {
    _classCallCheck(this, BasisDrawer);

    this.params = _jquery2.default.extend({
      container: '._c-drawer',
      drawer: '._c-drawer__body',
      btn: '._c-drawer__btn',
      toggleSubmenu: '._c-drawer__toggle'
    }, params);
    this.container = (0, _jquery2.default)(this.params.container);
    this.setListener();
  }

  _createClass(BasisDrawer, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      this.container.each(function (i, e) {
        var container = (0, _jquery2.default)(e);
        var drawer = container.find(_this.params.drawer).eq(0);
        var btn = container.find(_this.params.btn).eq(0);

        container.on('click', function (event) {
          _this.close(drawer);
          btn.removeClass('is-close');
        });

        drawer.on('click', function (event) {
          event.stopPropagation();
        });

        btn.on('click', function (event) {
          _this.toggle(drawer);
          btn.toggleClass('is-close');
          event.stopPropagation();
        });

        (0, _jquery2.default)(window).on('resize', function (event) {
          _this.close(drawer);
          btn.removeClass('is-close');
        });

        var hasSubMenu = drawer.find('[aria-expanded]');
        hasSubMenu.each(function (i, e) {
          var target = (0, _jquery2.default)(e);
          var toggleSubmenu = (0, _jquery2.default)(e).children(_this.params.toggleSubmenu);
          if (toggleSubmenu.length) {
            toggleSubmenu.on('click', function (event) {
              _this.toggle(target);
              event.stopPropagation();
            });
          }
        });
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(drawer) {
      event.preventDefault();
      if (drawer.attr('aria-expanded') === 'false') {
        this.open(drawer);
      } else {
        this.close(drawer);
      }
    }
  }, {
    key: 'open',
    value: function open(drawer) {
      drawer.attr('aria-expanded', 'true');
    }
  }, {
    key: 'close',
    value: function close(drawer) {
      var _this2 = this;

      drawer.attr('aria-expanded', 'false');
      var hasSubitems = drawer.find('[aria-expanded]');
      hasSubitems.each(function (i, e) {
        _this2.close((0, _jquery2.default)(e));
      });
    }
  }]);

  return BasisDrawer;
}();

exports.default = BasisDrawer;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
/**
 * This is for the overlay header.
 * If scroll the page, added a class "is-scrolled".
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null;

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BasisOverlayHeader = function () {
  function BasisOverlayHeader(container, params) {
    _classCallCheck(this, BasisOverlayHeader);

    this.params = _jquery2.default.extend({
      container: '._l-container',
      header: '._l-header',
      stickyClass: '_l-header--sticky',
      overlayClass: '_l-header--overlay',
      scrollClass: '_l-header--is-scrolled'
    }, params);
    this.container = (0, _jquery2.default)(this.params.container);
    this.header = (0, _jquery2.default)(this.params.header);
    this.isDisableWindowScroll = (0, _jquery2.default)('html').hasClass('_disable-window-scroll');

    this.setClassForScroll();
    this.setClassForSticky();
    this.setListener();
  }

  _createClass(BasisOverlayHeader, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      var target = this.getScrollTarget();

      target.on('scroll resize', function (event) {
        _this.setClassForScroll();
        _this.setClassForSticky();
      });
    }
  }, {
    key: 'setClassForScroll',
    value: function setClassForScroll() {
      var scroll = this.getScrollTop();

      if (scroll > 0) {
        this.header.addClass(this.params.scrollClass);
      } else {
        this.header.removeClass(this.params.scrollClass);
      }
    }
  }, {
    key: 'setClassForSticky',
    value: function setClassForSticky() {
      var scroll = this.getScrollTop();

      if (this.header.hasClass(this.params.stickyClass)) {
        var headerHeight = this.header.outerHeight();
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
  }, {
    key: 'getScrollTarget',
    value: function getScrollTarget() {
      if (this.isDisableWindowScroll) {
        return this.container;
      } else {
        return (0, _jquery2.default)(window);
      }
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      var target = this.getScrollTarget();
      return target.scrollTop();
    }
  }]);

  return BasisOverlayHeader;
}();

exports.default = BasisOverlayHeader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null;

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BasisMenu = function () {
  function BasisMenu(container, params) {
    _classCallCheck(this, BasisMenu);

    this.params = _jquery2.default.extend({
      container: '._c-menu'
    }, params);

    this.container = (0, _jquery2.default)(this.params.container);
    this.setListener();
  }

  _createClass(BasisMenu, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      this.container.each(function (i, e) {
        var container = (0, _jquery2.default)(e);

        var hasSubmenus = container.find('[aria-expanded]');
        hasSubmenus.each(function (i, e) {
          var item = (0, _jquery2.default)(e);

          item.on('mouseover', function (event) {
            _this.open(item);
          }, false);

          item.on('mouseleave', function (event) {
            _this.close(item);
          }, false);
        });
      });
    }
  }, {
    key: 'open',
    value: function open(item) {
      item.attr('aria-expanded', 'true');
    }
  }, {
    key: 'close',
    value: function close(item) {
      item.attr('aria-expanded', 'false');
    }
  }]);

  return BasisMenu;
}();

exports.default = BasisMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
