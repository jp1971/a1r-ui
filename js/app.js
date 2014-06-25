/*
 *      Yún RequireJS Module:
 *          app.js
 *
 *      desc:
 *          This file specifies the JS modules to be loaded and initialized by RequireJS.
 *
 */

requirejs.config({
    paths: {
        'jquery': 'lib/jquery.min',
        'keypress': 'lib/keypress',
        'ctrl': 'yun/ctrl',
        'toggle_led': 'yun/toggle_led',
        'cut_up': 'yun/cut_up'
    },
    shim: {
    }
});

requirejs([
        'jquery',
        'keypress',
        'ctrl',
        'toggle_led',
        'cut_up'
    ], function (
        $,
        keypress,
        ctrl,
        toggle_led,
        cut_up
    ){
});
