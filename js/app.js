/*
 *      Yún RequireJS Module:
 *          app.js
 *
 *      desc:
 *          This file specifies the JS modules to be loaded and initialized by RequireJS.
 *
 */

requirejs.config( {
    paths: {
        'jquery': 'lib/jquery.min',
        'keypress': 'lib/keypress',
        'ajax': 'a1r/ajax',
        'click': 'a1r/click',
        'press': 'a1r/press',
        'util': 'a1r/util'
    },
    shim: {
    }
} );

requirejs( [
        'jquery',
        'keypress',
        'ajax',
        'click',
        'press',
        'util'
    ], function (
        $,
        keypress,
        ajax,
        click,
        press,
        util
    ) {
} );