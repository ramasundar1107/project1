document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const packageCards = document.querySelectorAll(".package-card");
  const pageTitle = document.getElementById("page-title");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Remove active underline focus indicator class from all links
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // 2. Assign active state layout to clicked target
      button.classList.add("active");

      // 3. Dynamically rewrite Top Title Text block to match active tab
      pageTitle.textContent = button.textContent;

      // 4. Filter targeted view lists
      const selectedCategory = button.getAttribute("data-target");

      packageCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // 1. Existing Filtering Tabs Engine
  const tabButtons = document.querySelectorAll(".tab-btn");
  const packageCards = document.querySelectorAll(".package-card");
  const pageTitle = document.getElementById("page-title");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      pageTitle.textContent = button.textContent;

      const selectedCategory = button.getAttribute("data-target");

      packageCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // ==========================================================================
  // 2. NEW: Book Now Redirection Routing Function
  // ==========================================================================
  const bookButtons = document.querySelectorAll(".book-btn");

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // Read tracking variables stored directly in elements
      const selectedPackage = event.currentTarget.getAttribute("data-package");
      const structuralPrice = event.currentTarget.getAttribute("data-price");

      // Encode elements cleanly to pass via browser URL address parameters
      const urlSafePackage = encodeURIComponent(selectedPackage);
      const urlSafePrice = encodeURIComponent(structuralPrice);

      // Redirect the user to your internal appointment registration portal page
      window.location.href = `booking.html?package=${urlSafePackage}&price=${urlSafePrice}`;
    });
  });
});

