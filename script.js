const toggle = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".navlinks");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }),
);
document.getElementById("year").textContent = new Date().getFullYear();
if (window.L) {
  const map = L.map("map", { scrollWheelZoom: false }).setView(
    [51.04698, 2.39505],
    16,
  );
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  const icon = L.divIcon({
    className: "",
    html: '<div style="width:24px;height:24px;background:#00425A;border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px #0005"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
  L.marker([51.04698, 2.39505], { icon })
    .addTo(map)
    .bindPopup(
      "<strong>Malo à table</strong><br>4 avenue Gaspard Malo<br>59240 Dunkerque",
    );
}
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const subject = encodeURIComponent("Message depuis le site Malo à table");
  const body = encodeURIComponent(
    `Bonjour,\n\n${d.get("message")}\n\n${d.get("prenom")} ${d.get("nom")}\n${d.get("email")}`,
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
