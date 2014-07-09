/*
 *      a1r JS Module:
 *      	ajax.js
 *
 *      desc:
 *      	This module uses AJAX POST to send data to the Yún's /arduino REST API endpoint
 			to control servo motors with the Adafruit 16-Channel 12-bit PWM/Servo Driver.
 *
 */

define( ['jquery', 'util'], function ( $, util ) {

	// Set variables. Turn debug on or off.
	var _enable_debug = true,
		debug = ( _enable_debug ) ? util.debug : function(){};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	// Post via AJAX when the a1rForward custom event is triggered
	$( document ).on( 'a1rForward', function() {
		debug( 'Forward' );
		// $.ajax( {
		// 	type: 'POST',
		// 	url: '/arduino/0'
		// } )
		// .done( function( text ) {
		// 	console.log( text );
		// } );
	} );

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	// Post via AJAX when the a1rLeft custom event is triggered
	$( document ).on( 'a1rLeft', function() {
		debug( 'Left' );
		// $.ajax( {
		// 	type: 'POST',
		// 	url: '/arduino/1'
		// } )
		// .done( function( text ) {
		// 	console.log( text );
		// } );
	} );

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	// Post via AJAX when the a1rStop custom event is triggered
	$( document ).on( 'a1rStop', function() {
		debug( 'Stop' );
		// $.ajax( {
		// 	type: 'POST',
		// 	url: '/arduino/2'
		// } )
		// .done( function( text ) {
		// 	console.log( text );
		// } );
	} );

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	// Post via AJAX when the a1rRight custom event is triggered
	$( document ).on( 'a1rRight', function() {
		debug( 'Right' );
		// $.ajax( {
		// 	type: 'POST',
		// 	url: '/arduino/3'
		// } )
		// .done( function( text ) {
		// 	console.log( text );
		// } );
	} );

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	// Post via AJAX when the a1rReverese custom event is triggered
	$( document ).on( 'a1rReverse', function() {
		debug( 'Reverse' );
		// $.ajax( {
		// 	type: 'POST',
		// 	url: '/arduino/4'
		// } )
		// .done( function( text ) {
		// 	console.log( text );
		// } );
	} );
});	