var owl = $(".owl-carousel");
const scrollToTop = document.querySelector("#scrollToTop");
const nav = document.querySelector("nav");
const navigacija = document.querySelector("#navigacija");
const botNav = document.querySelector("#botNav");
const botNavMisc = document.querySelector("#botNavMisc");

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Dinamicko ispisivanje linkova
const topNavLink = (href, text) => `
<li>
  <a
    href="${href}"
    class="h-full px-4 no-underline text-orange-darker uppercase tracking-wide font-bold text-sm"
  >
  ${text}
  </a>
</li>
`;

const botNavLink = (href, text) => `
<li class="my-8">
  <a
    href="${href}"
    class="text-base text-white font-bold uppercase no-underline"
    >${text}</a
  >
</li>
`;

fetch("/data/links.json")
  .then(res => res.json())
  .then(links => {
    const { navigation, misc } = links;
    const navigacijaMarkup = navigation
      .map(({ href, text }) => topNavLink(href, text))
      .join(" ");

    const botNavMarkup = navigation
      .map(({ href, text }) => botNavLink(href, text))
      .join(" ");

    const miscMarkup = misc
      .map(({ href, text }) => botNavLink(href, text))
      .join(" ");

    navigacija.innerHTML = navigacijaMarkup;
    botNav.innerHTML = botNavMarkup;
    botNavMisc.innerHTML = miscMarkup;
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
$("a").smoothScroll();
