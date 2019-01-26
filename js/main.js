var owl = $(".owl-carousel");
const scrollToTop = document.querySelector("#scrollToTop");
const nav = document.querySelector("nav");

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 150) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "transparent";
  }
  if (window.pageYOffset >= 1900) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

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
$(".popup").magnificPopup({
  type: "image"
  // other options
});
