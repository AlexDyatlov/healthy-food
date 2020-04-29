$(function(){

  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__inner',{
   load: {
     filter: '.category-drinks, .category-bake, .category-dishes'
   }
  });

});