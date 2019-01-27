const galerija = document.querySelector("#galerija");

const galleryImage = (srcXs, srcLg) => `
<a
href="${srcXs}"
style="background-image: url('${srcLg}');"
class="popup w-1/4 h-64 flex flex-column items-center justify-center"
>
</a>
`;

fetch("/data/galerija.json")
  .then(res => res.json())
  .then(res => res.images)
  .then(images => {
    const gallery = images.map(src => galleryImage(src, src)).join(" ");
    galerija.innerHTML = gallery;
    $(".popup").magnificPopup({
      type: "image"
      // other options
    });
  });
