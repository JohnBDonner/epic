$(document).ready(function () {
	var body = document.body,
		pushMenuBottom = $(".container-bottom"),
		activeNav;

	/* Must adapt this code to jquery */

	/* push menu bottom */
    $(".toggle-push-bottom").click(function(event){
        $('body').addClass( "pmb-open" );
        $('.mask').css("z-index", "15");
        activeNav = "pmb-open";
    } );

    /* hide active menu if mask is clicked */
    $('.mask').click(function(event){
        $('body').removeClass( activeNav );
        activeNav = "";
        $('.mask').css("z-index", "-15");
    } );

});