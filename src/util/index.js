(function($) {
  var old = $.fn.drag;

  $.event.special.touchstart = {
    setup: function(_, ns, handle) {
      this.addEventListener("touchstart", handle, {
        passive: false
      });
    }
  };

  $.event.special.touchmove = {
    setup: function(_, ns, handle) {
      this.addEventListener("touchmove", handle, {
        passive: false
      });
    }
  };

  $.event.special.touchend = {
    setup: function(_, ns, handle) {
      this.addEventListener("touchend", handle, {
        passive: false
      });
    }
  };

  function Drag(element, options) {
    this.ver = "1.1.2";
    this.$element = $(element);
    this.options = $.extend({}, $.fn.drag.defaults, options); //所有值被合并到这个空对象上，保护了插件里面的默认值。
    this.init();
  }

  var isTouch =
    "ontouchstart" in window || navigator.msMaxTouchPoints || navigator.maxTouchPoints ? true : false;
  var touchStartEvent = isTouch ? "mousedown touchstart" : "mousedown";
  var touchMoveEvent = isTouch ? "mousemove touchmove" : "mousemove";
  var touchEndEvent = isTouch ? "mouseup touchend" : "mouseup"
  Drag.prototype = {
    constructor: Drag,
    init: function() {
      var options = this.options;
      // options.custom 意为是否需要自定义处理，自定义处理时库函数除了调用回调函数不做其它任何处理
      if (!options.custom) {
        // 原有初始化过程中所需逻辑代码
        //todo  记录 【第一次】 初始位置,以便复位使用
        this.$element.each(function() {
          var startPos = $(this).position();
          $(this).data("startPos", {
            left: startPos.left / window.base + "rem",
            top: startPos.top / window.base + "rem"
          });
        });
      }
      //pc
      var isUsing = false // 防止surface用户先用鼠标点住，没松开之前又用触摸屏再点住
      this.$element.on(touchStartEvent, function(e) {
        if (isUsing) return
        isUsing = true
        var ev = e.type == "touchstart" ? e.originalEvent.touches[0] : e,
          that = this;

        if (!options.custom) {
          // 原有拖动过程中所需变量
          var startPos = $(this).position(),
            disX = ev.pageX - startPos.left,
            disY = ev.pageY - startPos.top;
        }

        if (options.before && $.isFunction(options.before)) {
          options.before.call(that, ev);
        }
        //pc端 if (os.isPc) {
        $(document).on(touchMoveEvent, function(e) {
          var ev = e.type == "touchmove" ? e.originalEvent.touches[0] : e;
          if (!options.custom) {
            // 原有拖动过程中所需变量以及逻辑代码
            var $this = $(that),
              $parent = $this.offsetParent(),
              $parent = $parent.is(":root") ? $(window) : $parent,
              pPos = $parent.offset(),
              pPos = pPos ? pPos : {
                left: 0,
                top: 0
              },
              left = ev.pageX - disX,
              top = ev.pageY - disY,
              r = $parent.width() - $this.outerWidth(true),
              d = $parent.height() - $this.outerHeight(true);

            left = left < 0 ? 0 : left > r ? r : left;
            top = top < 0 ? 0 : top > d ? d : top;

            $this.css({
              left: left / window.base + "rem",
              top: top / window.base + "rem"
            });

            $(that).attr("data-left", left / window.base + "rem");
            $(that).attr("data-top", top / window.base + "rem");
    
          }

          if (options.process && $.isFunction(options.process)) {
            options.process.call(that, ev);
          }

          e.preventDefault();
        });

        $(document).on(touchEndEvent, function(e) {
          isUsing = false
          var ev = e.type == "touchend" ? e.originalEvent.changedTouches[0] : e;
          $(document).off(`${touchMoveEvent} ${touchEndEvent}`);
          //console.log(that,"==========mouseup=======touchend===");
          if (options.end && $.isFunction(options.end)) {
            options.end.call(that, ev);
          }
          e.preventDefault();
        });

        e.preventDefault();
      });
    }
  };

  //jQ插件模式
  $.fn.drag = function(options) {
    return this.each(function() {
      var $this = $(this),
      instance = $this.data("drag");

      if (!instance) {
        instance = new Drag(this, options);
        $this.data("drag", instance);
      } else {
        instance.init();
      }

      if (typeof options === "string") {
        //instance.options[options].call(this);
      }
    });
  };
  //设置默认行为
  $.fn.drag.defaults = {
    before: $.noop,
    process: $.noop,
    end: $.noop
  };
  //释放drag使用权
  $.fn.drag.noConflict = function() {
    $.fn.drag = old;
    return this;
  };
})(jQuery);