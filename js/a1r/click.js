/*
 *      Yún JS Module:
 *      	ctrl.js
 *
 *      desc:
 *      	This module uses AJAX POST to send data to the Yún's /arduino REST API endpoint
 			to control servo motors with the Adafruit 16-Channel 12-bit PWM/Servo Driver.
 *
 */

define( ['jquery', 'ajax'], function ( $, ajax ) {

	_init();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _init() {

		// Click functions
		$( 'button' ).click( function() {
			$( 'button' ).not( this ).removeClass( 'active' );
			$( this ).addClass( 'active' );
		} );

		$( 'button.forward' ).click( function() {
			$.event.trigger( {
				type: 'a1rForward'
			} );
		} );

		$( 'button.left' ).click( function() {
			$.event.trigger( {
				type: 'a1rLeft'
			} );			
		} );

		$( 'button.stop' ).click( function() {
			$.event.trigger( {
				type: 'a1rStop'
			} );
		} );

		$( 'button.right' ).click( function() {
			$.event.trigger( {
				type: 'a1rRight'
			} );
		} );

		$( 'button.reverse' ).click( function() {
			$.event.trigger( {
				type: 'a1rReverse'
			} );
		} );
	}
} );	