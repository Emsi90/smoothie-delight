$(document).ready(function(){
  $(".testi").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      }
    })
});