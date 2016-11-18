$(document).ready(function(){
    $('#idFoto').hover(function(){
        $('#idCapaImg').removeClass('capa-img');
    },function(){$('#idCapaImg').addClass('capa-img');});
    
    $('.slkCarrusel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
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
