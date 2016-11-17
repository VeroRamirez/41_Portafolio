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

