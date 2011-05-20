(function(jQuery, underscore, global){

	var nin  = jQuery.sub();
	
	for(var k in underscore){
		if(nin[k] === undefined)
			nin[k] = underscore[k];
	}
	
	nin.ja = function ( deep ) {
		if ( global.$ === nin ) {
			global.$ = undefined;
		}

		if ( deep && global.nin === nin ) {
			global.nin = undefined;
		}

		return nin;
	}
	
	global.nin = global.$ = nin;
})(jQuery.noConflict(), _.noConflict(), this);