var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  animateOut: "fadeOut"
});
$(".play").on("click", function() {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function() {
  owl.trigger("stop.owl.autoplay");
});
