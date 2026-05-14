document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize browser URL tracking parameters query dictionary reader instance
  const windowUrlParameters = new URLSearchParams(window.location.search);

  // 2. Read specific data parameters sent out from your dynamic services buttons feed
  const requestedPackageName = windowUrlParameters.get("package");
  const requestedPackagePrice = windowUrlParameters.get("price");

  // 3. Locate text structural hooks containers targets positions inside document view
  const displayTitleTextElement = document.getElementById(
    "selected-package-name",
  );
  const displayPriceTextElement = document.getElementById(
    "selected-package-price",
  );

  // 4. Fallback check: If items are passed successfully, swap standard innerText structures
  if (requestedPackageName) {
    // Formats data to read "Bridal Makeup [Package Name]" dynamically
    displayTitleTextElement.textContent = `Bridal Makeup ${requestedPackageName}`;
  } else {
    // Fallback default value if accessed without passing parameters
    displayTitleTextElement.textContent = "Bridal Makeup Luxury Package";
  }

  if (requestedPackagePrice) {
    // Formats data to read "Rs [Price] Negotiable" dynamically
    displayPriceTextElement.textContent = `Rs ${requestedPackagePrice} Negotiable`;
  } else {
    // Fallback default value if accessed without passing parameters
    displayPriceTextElement.textContent = "Rs 25000 Negotiable";
  }
});




<div class="top-nav-bar">
    <a href="services.html" class="back-link">
        <i class="fa-solid fa-chevron-left"></i> Back
    </a>
</div>

//// ==========================================================================
// Check Next Availability கிளிக் செய்தால் calendar.html பக்கத்திற்கு செல்லும் கோடு
// ==========================================================================
const checkNextBtn = document.getElementById("check-next-avail-btn");

if (checkNextBtn) {
    checkNextBtn.addEventListener("click", () => {
        // தற்போதைய பக்கத்தில் இருக்கும் பேக்கேஜ் மற்றும் விலை விவரங்களை எடுக்கிறது
        const windowUrlParameters = new URLSearchParams(window.location.search);
        const currentPackage = windowUrlParameters.get('package') || "Luxury Package";
        const currentPrice = windowUrlParameters.get('price') || "25000";

        // URL முகவரிக்கு ஏற்றவாறு மாற்றுகிறது
        const encodedPackage = encodeURIComponent(currentPackage);
        const encodedPrice = encodeURIComponent(currentPrice);

        // நேராக உங்கள் புதிய இன்டராக்டிவ் கேலண்டர் பக்கத்திற்கு (calendar.html) கூட்டிச் செல்கிறது
        window.location.href = `calendar.html?package=${encodedPackage}&price=${encodedPrice}`;
    });
}

