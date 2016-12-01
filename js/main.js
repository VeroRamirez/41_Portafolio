$(document).ready(function(){
    $('#idFoto').hover(function(){
        $('#idCapaImg').removeClass('capa-img');
    },function(){$('#idCapaImg').addClass('capa-img');});	
    
    
    //Muestra y esconde menu
	$(".opMenu").on("click", function(){
		// Si esta en pequeno lo oculta
	 	if ( $(window).width() <= 768 ) {
	 		$("#myNavbar").hide(100);
	 	}
	});
	$("#homeNav").on("click", function(){
	 	$("#myNavbar").toggle(100)
	});
    
});

$( function() {

    $( '#cd-dropdown1' ).dropdown( {
        gutter : 5,
        delay : 40,
        rotated : 'left'
    } );
    
    $( '#cd-dropdown2' ).dropdown( {
        gutter : 5,
        delay : 40,
        rotated : 'left'
    } );
    
    $( '#cd-dropdown3' ).dropdown( {
        gutter : 5,
        delay : 40,
        rotated : 'left'
    } );

});

//Aumenta Fondo en la lista de habilidades
function aumentaFondo(){
    $(this).addClass('aumentaFondo');
} 




