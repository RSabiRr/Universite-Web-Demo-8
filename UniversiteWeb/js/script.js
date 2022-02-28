$(document).ready(function(){

    $('.nav-link').click(function() {
        console.log("Clicked");
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
    });
  
    $(function(){
        $('.timer').countTo();
    });



    $('.student-1').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });



    $('.partner-logo').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    
   


    
    
  });