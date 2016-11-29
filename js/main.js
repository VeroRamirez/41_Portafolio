$(document).ready(function(){
    $('#idFoto').hover(function(){
        $('#idCapaImg').removeClass('capa-img');
    },function(){$('#idCapaImg').addClass('capa-img');});		
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

function aumentaFondo(){
    $(this).addClass('aumentaFondo');
} 
