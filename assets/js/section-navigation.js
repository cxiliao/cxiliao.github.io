// Close the mobile menu after following an anchor on the current page.
document.getElementById("site-nav")?.addEventListener("click", function (event) {
  const link = event.target.closest("a");
  if (!link || !link.getAttribute("href")?.startsWith("#")) return;

  const menu = this.querySelector(".hidden-links");
  const button = this.querySelector("button");
  menu?.classList.add("hidden");
  button?.classList.remove("close");
});
