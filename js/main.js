$(document).ready(function(){
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $('body').toggleClass('noScroll');
  });
});