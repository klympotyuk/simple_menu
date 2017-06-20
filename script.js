$(document).ready(function(){
    var bt1=$('#bt1');
    var ul1=$('#m1');
    var bt2=$('#bt2');
    var ul2=$('#m2');
    var bt3=$('#bt3');
    var ul3=$('#m3');

    bt1.on('click',function(e){
        bt1.toggleClass('active');        
        ul1.slideToggle('fast');
        ul1.parent().siblings().children('.menuItem__items').slideUp('fast');
        bt1.parent().siblings().children('.menuItem__button').toggleClass('active',false);
    });
    bt2.on('click',function(e){
        bt2.toggleClass('active'); 
        ul2.slideToggle('fast');
        ul2.parent().siblings().children('.menuItem__items').slideUp('fast');
        bt2.parent().siblings().children('.menuItem__button').toggleClass('active',false);        
    });
    bt3.on('click',function(e){
        bt3.toggleClass('active'); 
        ul3.slideToggle('fast');
        ul3.parent().siblings().children('.menuItem__items').slideUp('fast');
        bt3.parent().siblings().children('.menuItem__button').toggleClass('active',false);      
    });
});