$(document).ready(function()    {

    $('.accordion-item').click(function()   {
        
        if($(this).hasClass('open')) { //Zwijanie
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideUp();
            
        }   else    { //Rozwijanie 
        $(this).addClass('open');
        $(this).find('.accordion-content').slideDown();
    };
});
});
