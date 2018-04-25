;( function( $, window, document, undefined ) {

    "use strict";

    var pluginName = "appLayout",
        defaults = {
            plugins: [{name: 'myPluginName'}]
        };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;
        this.$el = $(this.element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {
        init: function() {}
    } );

    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" +
                    pluginName, new Plugin( this, options ) );
            }
        } );
    };

} )( jQuery, window, document );
