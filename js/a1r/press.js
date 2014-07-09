/*
 *      Yún JS Module:
 *      	ctrl.js
 *
 *      desc:
 *      	This module uses AJAX POST to send data to the Yún's /arduino REST API endpoint
 			to control servo motors with the Adafruit 16-Channel 12-bit PWM/Servo Driver.
 *
 */

define( ['jquery', 'keypress', 'ajax'], function ( $, keypress, ajax ) {

	var listener = new keypress.Listener();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var a1r_key_combos = listener.register_many( [
	    {
	        'keys'          : 'space',
	        'on_keydown'    : function() {
	        	$.event.trigger( {
	        		type: 'a1rStop'
	        	} );
	        },
	        'is_solitary': true,
	        'prevent_default': true,
	        'prevent_repeat': true
	    },
	    {
	        'keys'          : 'up',
	        'on_keydown'    : function() {
	        	$.event.trigger( {
	        		type: 'a1rForward'
	        	} );
	        },
	        'is_solitary': true,
	        'prevent_default': true,
	        'prevent_repeat': true
	    },
	    {
	        'keys'          : 'left',
	        'on_keydown'    : function() {
	         	$.event.trigger( {
	         		type: 'a1rLeft'
	         	} );
	        },
	        'is_solitary': true,
	        'prevent_default': true,
	        'prevent_repeat': true
	    },
	    {
	        'keys'          : 'right',
	        'on_keydown'    : function() {
	    		$.event.trigger( {
	    			type: 'a1rRight'
	    		} );
	        },
	        'is_solitary': true,
	        'prevent_default': true,
	        'prevent_repeat': true
	    },
	    {
	        'keys'          : 'down',
	        'on_keydown'    : function() {
	        	$.event.trigger( {
	        		type: 'a1rReverse'
	        	} );
	        },
	        'is_solitary': true,
	        'prevent_default': true,
	        'prevent_repeat': true
	    }
	] ); 
} );	