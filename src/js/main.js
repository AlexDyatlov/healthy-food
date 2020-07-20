$(function(){

  $('.menu__btn').on('click', function(){
    $(this).toggleClass('active');
    $('.menu__list').slideToggle();
  });

  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__inner',{
   load: {
     filter: '.category-drinks, .category-bake, .category-dishes'
   }
  });

});

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});