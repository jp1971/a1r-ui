/**
 *		js module:
 *			util.js
 *
 *		desc:
 *			general utilities
 *
 */

define( ['jquery'], function( $ ) {

	var _name = 'Util'
	;

	_init();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _init() {

		debug( _name + ': initialized' );
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function debug( obj ) {

		if ( ( typeof console == 'object' ) && ( console.log ) ) {

			console.log( obj );  
		}
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	return {
		debug : debug
	};

} );