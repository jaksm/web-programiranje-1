const forma = document.querySelector("#rezervacijeForma");
const labels = document.querySelectorAll("label");

forma.addEventListener("submit", e => {
  e.preventDefault();
  const errors = {};
  const isPhone = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );
  const isString = new RegExp(/^[a-zA-Z\x00-\x7F]+$/i);

  const formData = new FormData(forma);
  const data = {
    ime: formData.get("ime"),
    prezime: formData.get("prezime"),
    brojMesta: formData.get("brojMesta"),
    tel: formData.get("tel"),
    poruka: formData.get("poruka")
  };

  // Error checkz
  Object.keys(data).forEach(key => {
    value = data[key];
    if (!isString.test(value)) {
      errors[key] = `${key} nije ispravno`;
    }
    if (key !== "poruka") {
      if (value === "" || value === null || value === undefined) {
        errors[key] = `${key} ne sme biti prazno`;
      }
    }
  });

  if (parseInt(data.brojMesta) < 1) {
    errors.brojMesta = "Morate rezervisati bar jedno mesto";
  }
  if (!isPhone.test(data.tel)) {
    errors.tel = "Neispravan broj telefona";
  }

  if (Object.keys(errors).length > 0) {
    labels.forEach(label => {
      const forInput = label.attributes.for.value;
      const errorKey = Object.keys(errors).find(key => key === forInput);
      if (errorKey) {
        const error = errors[errorKey];
        label.style.color = "red";
        label.innerText = error;
      }
    });
  } else {
    alert(JSON.stringify(data, null, 2));
    window.location.reload();
  }
});
