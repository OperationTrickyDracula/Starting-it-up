var fadeTime = 200;
var main = function(){ 
    $('.Login-Button').click(function(){
        if($('.open').length == 0){
            $('.Login-dropdown').fadeIn(fadeTime).addClass('open');
            $('.header-home img').fadeOut(fadeTime);
            $('.header-home img').css("position", "relative");
        }
        else{
            $('.open').fadeOut(fadeTime).removeClass('open');
            $('.header-home img').fadeIn(fadeTime);

        }
    });
}


$(document).ready(main);
