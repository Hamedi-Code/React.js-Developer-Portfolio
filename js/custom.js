const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  // جابجایی کلاس active برای نمایش یا مخفی شدن منو
  navLinks.classList.toggle("active");

  /* تغییر آیکون همبرگری به ضربدر هنگام باز شدن منو */
  const icon = menuToggle.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// بستن منو در صورت کلیک روی لینک‌ها
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.querySelector("i").classList.replace("fa-xmark", "fa-bars");
  });
});
