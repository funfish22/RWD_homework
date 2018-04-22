$(document).ready(function() {
   $('.fa-bars').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
   $('.fa-heart-o').click(function(event) {
   	/* Act on the event */
   		$(this).toggleClass('fa-heart-o').toggleClass('fa-heart');
   });

   $('.shoppingList li').click(function(event) {
   	/* Act on the event */
   	$(this).toggleClass('add-food').siblings().removeClass('add-food');
   });

   $('.top a').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      $('html,body').animate({
            scrollTop : 0
         }, 500);
      });
});