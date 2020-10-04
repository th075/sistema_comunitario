if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}

$.AdminLTE = {};

$.AdminLTE.options = {

  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", 
  animationSpeed: 500,

  sidebarToggleSelector: "[data-toggle='offcanvas']",

  sidebarPushMenu: true,
  sidebarSlimScroll: true,

  sidebarExpandOnHover: false,
  enableBoxRefresh: true,
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",

  enableFastclick: false,
  enableControlTreeView: true,
  enableControlSidebar: true,
  controlSidebarOptions: {
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    selector: ".control-sidebar",
    slide: true
  },
  boxWidgetOptions: {
    boxWidgetIcons: {
      collapse: 'fa-minus',
      open: 'fa-plus',
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      remove: '[data-widget="remove"]',
      collapse: '[data-widget="collapse"]'
    }
  },
  directChat: {

    enable: true,

    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },

  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },

  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};


$(function () {
  "use strict";


  $("body").removeClass("hold-transition");


  if (typeof AdminLTEOptions !== "undefined") {
    $.extend(true,
      $.AdminLTE.options,
      AdminLTEOptions);
  }


  var o = $.AdminLTE.options;


  _init();


  $.AdminLTE.layout.activate();


  if (o.enableControlTreeView) {
    $.AdminLTE.tree('.sidebar');
  }


  if (o.enableControlSidebar) {
    $.AdminLTE.controlSidebar.activate();
  }


  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }


  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }


  if (o.enableBSToppltip) {
    $('body').tooltip({
      selector: o.BSTooltipSelector,
      container: 'body'
    });
  }


  if (o.enableBoxWidget) {
    $.AdminLTE.boxWidget.activate();
  }

  
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }


  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

function _init() {
  'use strict';

  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $('body, html, .wrapper').css('height', 'auto');
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
    
      $(".layout-boxed > .wrapper").css('overflow', 'hidden');

      var footer_height = $('.main-footer').outerHeight() || 0;
      var neg = $('.main-header').outerHeight() + footer_height;
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height() || 0;

      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - footer_height);
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
     
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }

      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          $(".sidebar").slimScroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  $.AdminLTE.pushMenu = {
    activate: function (toggleBtn) {

      var screenSizes = $.AdminLTE.options.screenSizes;


      $(document).on('click', toggleBtn, function (e) {
        e.preventDefault();

        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }

        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      });

      $(".content-wrapper").click(function () {
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });


      if ($.AdminLTE.options.sidebarExpandOnHover
        || ($('body').hasClass('fixed')
        && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;

      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
          && $("body").hasClass('sidebar-collapse')
          && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
          && $('body').hasClass('sidebar-expanded-on-hover')
          && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  $.AdminLTE.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.AdminLTE.options.animationSpeed;
    $(document).off('click', menu + ' li a')
      .on('click', menu + ' li a', function (e) {

        var $this = $(this);
        var checkElement = $this.next();

        
        if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {

          checkElement.slideUp(animationSpeed, function () {
            checkElement.removeClass('menu-open');

          });
          checkElement.parent("li").removeClass("active");
        }

        else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {

          var parent = $this.parents('ul').first();

          var ul = parent.find('ul:visible').slideUp(animationSpeed);
          
          ul.removeClass('menu-open');

          var parent_li = $this.parent("li");

       
          checkElement.slideDown(animationSpeed, function () {
            
            checkElement.addClass('menu-open');
            parent.find('li.active').removeClass('active');
            parent_li.addClass('active');
           
            _this.layout.fix();
          });
        }
       
        if (checkElement.is('.treeview-menu')) {
          e.preventDefault();
        }
      });
  };


  $.AdminLTE.controlSidebar = {
    
    activate: function () {

      var _this = this;

      var o = $.AdminLTE.options.controlSidebarOptions;

      var sidebar = $(o.selector);
  
      var btn = $(o.toggleBtnSelector);


      btn.on('click', function (e) {
        e.preventDefault();

        if (!sidebar.hasClass('control-sidebar-open')
          && !$('body').hasClass('control-sidebar-open')) {

          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });


      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
       
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },

    open: function (sidebar, slide) {

      if (slide) {
        sidebar.addClass('control-sidebar-open');

        $('body').addClass('control-sidebar-open');
      }
    },

    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        if (_this.hasBindedResize) {
          return;
        }
        $(window).resize(function () {
          _this._fix(sidebar);
        });
        _this.hasBindedResize = true;
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };


  $.AdminLTE.boxWidget = {
    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.AdminLTE.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; 
      }

      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });


      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;

      var box = element.parents(".box").first();

      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {

        element.children(":first")
          .removeClass(_this.icons.collapse)
          .addClass(_this.icons.open);
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        element.children(":first")
          .removeClass(_this.icons.open)
          .addClass(_this.icons.collapse);
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}



(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    var settings = $.extend({
      trigger: ".refresh-btn",

      source: "",

      onLoadStart: function (box) {
        return box;
      }, 
      onLoadDone: function (box) {
        return box;
      } 

    }, options);


    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {

      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }

      var box = $(this);
      var rBtn = box.find(settings.trigger).first();


      rBtn.on('click', function (e) {
        e.preventDefault();
        start(box);


        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };

})(jQuery);


(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.AdminLTE.boxWidget.activate(this);
  };

  $.fn.toggleBox = function () {
    var button = $($.AdminLTE.boxWidget.selectors.collapse, this);
    $.AdminLTE.boxWidget.collapse(button);
  };

  $.fn.removeBox = function () {
    var button = $($.AdminLTE.boxWidget.selectors.remove, this);
    $.AdminLTE.boxWidget.remove(button);
  };

})(jQuery);


(function ($) {

  'use strict';

  $.fn.todolist = function (options) {

    var settings = $.extend({

      onCheck: function (ele) {
        return ele;
      },
     
      onUncheck: function (ele) {
        return ele;
      }
    }, options);

    return this.each(function () {

      if (typeof $.fn.iCheck != 'undefined') {
        $('input', this).on('ifChecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });

        $('input', this).on('ifUnchecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onUncheck.call(ele);
        });
      } else {
        $('input', this).on('change', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          if ($('input', ele).is(":checked")) {
            settings.onCheck.call(ele);
          } else {
            settings.onUncheck.call(ele);
          }
        });
      }
    });
  };
}(jQuery));
