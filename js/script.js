$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
        }
    })
})


$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('#navber-part').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#navber-part').addClass('sticky');
        } else {
            $('#navber-part').removeClass('sticky'); 
        }
    };
  
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
      stickyNav();
    });
  });