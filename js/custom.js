//  Manage Top Navigation Bar for Opening the child menu
$(document).ready(function(){
$('.parent').on('click',function(e){
    e.preventDefault();
    $('.dropdown-menu-outer').toggleClass('active');
    $('.dropdown-menu-outer').find('.dropdown-menu').toggleClass('show');
    $('.site-header').toggleClass('dropdown-open');
    
});

// When Scroll adding class header with sticky
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 50) {
        $('.site-header').addClass('scroll');
    } else{
            $('.site-header').removeClass('scroll');
    }
  });

// Active menu class child effect to remain active
$('.link').on('click',function(e){
$('.link').removeClass('current');
let id = $(this).attr('href');
$(this).addClass('current');

// Reintialize the header classes
setTimeout(function(){  
  $('.dropdown-menu-outer').addClass('active');
  $('.dropdown-menu-outer').find('.dropdown-menu').addClass('show');
  $('.site-header').addClass('dropdown-open');
  $('.dropdown-menu').addClass('show'); }, 500);    
  });

// Adding Dropdown SubMenu Link Class
  $('.link').on('click',function(e){
    $('.dropdown-menu-outer').addClass('link');
  });

// Remove the click here class
  $('html').click(function() {
    $('.dim').removeClass('dim');
  });
});