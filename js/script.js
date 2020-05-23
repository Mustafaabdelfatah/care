/* global $ , document*/
$(document).ready(function(){
    
    // smoothly scroll to element 
    
    $('.nav li a').click(function(e){
        
        e.preventDefault();
        
        $('html, body').animate({
            
            scrollTop : $('#' + $(this).data('scroll')).offset().top
            
        } , 1000)
        
    })
    $('.nav li a').click(function(){
        
        
        $(this).addClass('active').siblings().removeClass('active');
        
    })
    
})