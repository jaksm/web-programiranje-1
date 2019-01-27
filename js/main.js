var owl = $(".owl-carousel");
const nav = document.querySelector("nav");
const scrollToTop = document.querySelector("#scrollToTop");

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 150) {
    nav.style.backgroundColor = "#FAAD63";
    nav.style.opacity = ".8";
    nav.style.boxShadow =
      "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.opacity = "1";
    nav.style.boxShadow = "none";
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
