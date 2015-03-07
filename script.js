$(document).ready(function () {
	var body = document.body,
        mask = $("<div class='mask'/>"),
		pushMenuBottom = $(".container-bottom"),
		activeNav;

	/* Must adapt this code to jquery */

	/* push menu bottom */
    $(".toggle-push-bottom").click(function(event){
    	event.preventDefault();
    	console.log("clicked");
        $('body').addClass( "pmb-open" );
        $('body').append(mask);
        activeNav = "pmb-open";
    } );

    /* hide active menu if mask is clicked */
    mask.click(function(event){
    	console.log("Mask Clicked");
    	event.preventDefault();
        $('body').removeClass( activeNav );
        activeNav = "";
        $(mask).remove();
        mask = $("<div class='mask'/>");
    } );

});