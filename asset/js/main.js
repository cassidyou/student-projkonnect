$(document).ready(function() {

       var currentYear = new Date().getFullYear();
       $('#year').text(currentYear);


        //NAVBAR TOGGLING - ADMIN

        $('.main-header .menu').on('click', function(){
            $('.sidebar').animate({left: '0px'});
        })

        $('.sidebar-close').on('click', function(){
            $('.sidebar').animate({left: '-350px'});
        })


        $('body').on('click', function(){

            $('.profile-dropdown-items').addClass('d-none');
            $('.directions').addClass('close');
        })
       $('.drop-now').on('click', function(e){
            e.stopPropagation();

            $(this).parents('.profile-dropdown').siblings('.profile-dropdown').find('.profile-dropdown-items').addClass('d-none');
            $(this).parents('.profile-dropdown').siblings('.profile-dropdown').find('.directions').addClass('close');
            $(this).siblings('.profile-dropdown-items').toggleClass('d-none');
           $(this).find('.directions').toggleClass('close');
       })

       $('.profile-dropdown-items').on('click', function(e){
            e.stopPropagation();
            $(this).removeClass('d-none');
       })
       
});