$(function(){
    $('.mobile i').click(function(){
        $('.mobile ul').slideToggle();
    });

    $('.header a').click(function(e){
        
        var href = $(this).attr('href');
        var distancia = $(href).offset().top;

        $('html,body').animate({'scrollTop':distancia},1200);
        e.preventDefault();
    })
})