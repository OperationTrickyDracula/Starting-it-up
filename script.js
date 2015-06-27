var main = function(){ 
    $('.Login-Button').click(function(){
        if($('.Login-dropdown').css("visibility") === "hidden"){
            $('.Login-dropdown').css("visibility", "visible");
        }
        else{
            $('.Login-dropdown').css("visibility", "hidden");
        }
    });
}


$(document).ready(main);