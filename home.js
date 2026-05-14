document.addEventListener("DOMContentLoaded", () => {
  const gridBookButtons = document.querySelectorAll(".category-book-btn");

  gridBookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "services.html";
    });
  });
});

// Append this routing function loop structure directly into your home.js script workspace
const requestButtons = document.querySelectorAll(".h-request-btn");

requestButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const packageName = e.currentTarget.getAttribute("data-package");
        const packagePrice = e.currentTarget.getAttribute("data-price");

        const encodedPackage = encodeURIComponent(packageName);
        const encodedPrice = encodeURIComponent(packagePrice);

        // Routes cleanly forward over onto your calendar confirmation workspace view
        window.location.href = `booking.html?package=${encodedPackage}&price=${encodedPrice}`;
    });
});
