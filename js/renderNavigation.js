const navigacija = document.querySelector("#navigacija");
const botNav = document.querySelector("#botNav");
const botNavMisc = document.querySelector("#botNavMisc");

const topNavLink = (href, text) => `
<li>
  <a
    href="${href}"
    class="h-full px-4 no-underline text-white uppercase tracking-wide font-bold text-sm hover:text-orange-darker"
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
    $("a").smoothScroll();
  });
