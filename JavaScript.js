document.addEventListener("DOMContentLoaded", function () {
  const filter = document.getElementById("standortFilter");
  const zeilen = document.querySelectorAll("tbody tr");

  filter.addEventListener("change", function () {
    const auswahl = filter.value.toLowerCase();

    zeilen.forEach(row => {
      const standortZelle = row.children[1].textContent.toLowerCase();
      if (auswahl === "alle" || standortZelle.includes(auswahl)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
