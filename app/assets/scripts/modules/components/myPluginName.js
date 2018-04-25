;(function ($, window, document, undefined) {

    "use strict";

    var pluginName = "myPluginName",
        defaults = {},
        _classes = {
            '' : ''
        },
        _selectors = {
           '' : ''
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$el = $(this.element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            var self = this;

            $(_selectors.main).click(function () {
                $(_selectors.menuExpand).removeClass(_classes.show);
                $(_selectors.pageContent).removeClass(_classes.openNav);
                $(_selectors.menu + ' ' + _selectors.openNav).removeClass(_classes.active);
                $(_selectors.navMain + ' ' + _selectors.home).removeClass(_classes.active);
            });

            $(_selectors.menu + ' ' + _selectors.openNav).on('click', function (e) {
                Plugin.prototype.openNav();
                $(_selectors.navMain + ' ' + _selectors.home).toggleClass(_classes.active);
                $(this).toggleClass(_classes.active);
                e.stopPropagation();
            });

            $(_selectors.menu + ' ' + _selectors.menuExpand).on('click', function (e) {
                e.stopPropagation();
            });

            $(_selectors.menuExpand + ' ' + _selectors.favorite).on('click', function () {
                $(_selectors.icon, this).toggleClass(_classes.fav + ' ' + _classes.nonfav);
            });

            $(_selectors.addFavorite + ' a').on('click', function (e) {
                Plugin.prototype.openNav();
                $(_selectors.navMain + ' ' + _selectors.home).toggleClass(_classes.active);
                $(_selectors.menu + ' ' + _selectors.openNav).toggleClass(_classes.active);
                e.stopPropagation();
            });


            $(_selectors.overlay).on('click', function () {
                $(_selectors.navMain + ' ' + _selectors.home).toggleClass(_classes.active);
                $(_selectors.menu + ' ' + _selectors.openNav).toggleClass(_classes.active);
                Plugin.prototype.openNav();
            });

            ///ProgressBar/////
            //Changed value for demo
            $(_selectors.progressbarLogout).progressbar({
                "value": 70,
            }).before("<div class='logout-caption'>1 min avant decon.</span>");
            ;
            var progressValue = $(_selectors.progressbarLogout).progressbar("value");
            if (progressValue > 60) {
                $(_selectors.progressbarLogout).addClass(_classes.logoutDanger);
            }

        },

        ////////Menu Management///////
        openNav: function () {
            var mainNav = $(_selectors.menuExpand),
                overlay = $(_selectors.overlay);

            if (mainNav.hasClass(_classes.show)) {
                mainNav.removeClass(_classes.show);
                overlay.removeClass(_classes.open);
                $(_selectors.pageContent).removeClass(_classes.openNav);

            } else {
                mainNav.addClass(_classes.show);
                overlay.addClass(_classes.open);
                $(_selectors.pageContent).addClass(_classes.openNav);
            }
        },
})
    ;

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);