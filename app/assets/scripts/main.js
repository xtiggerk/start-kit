$(function () {
    // const
    var $body = $('body'),
        _classes = {
            'myClassExample': '.my-class'
        };
    $body.appLayout();

    if ($body.hasClass(_classes.myClassExample)) {
        $body.myPluginName();
        var activePage = 'myClassExample';
    }
});





