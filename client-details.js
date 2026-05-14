document.addEventListener("DOMContentLoaded", () => {
  // 1. URL இலிருந்து பேக்கேஜ், விலை, தேதி மற்றும் நேரத் தரவை எடுத்தல்
  const urlParams = new URLSearchParams(window.location.search);
  const pkgName = urlParams.get("package") || "Luxury Package";
  const pkgPrice = urlParams.get("price") || "25000";
  const bookingDate = urlParams.get("date") || "12 May 2026";
  const bookingTime = urlParams.get("time") || "2:30 Am";

  // கார்டில் உள்ள தகவல்களைப் புதுப்பித்தல்
  document.getElementById("summary-package-name").textContent =
    `Bridal Makeup ${pkgName}`;
  document.getElementById("summary-package-price").textContent =
    `Rs ${pkgPrice} Negotiable`;
  document.getElementById("summary-datetime").textContent =
    `${bookingDate} At ${bookingTime}`;
  document.getElementById("summary-total-price").textContent =
    `Rs ${pkgPrice} Negotiable`;

  // Back பட்டனில் பழைய தேதி மற்றும் நேரத் தரவை மீண்டும் கேலண்டர் பக்கத்திற்கு அனுப்புதல்
  const backLink = document.getElementById("back-to-calendar");
  backLink.href = `calendar.html?package=${encodeURIComponent(pkgName)}&price=${encodeURIComponent(pkgPrice)}`;

  // 2. படிவம் சரிபார்த்தல் (Form Validation) லாஜிக்
  const form = document.getElementById("client-info-form");

  const fields = {
    name: document.getElementById("client-name"),
    email: document.getElementById("client-email"),
    phone: document.getElementById("client-phone"),
    street: document.getElementById("client-street"),
    city: document.getElementById("client-city"),
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // படிவம் தானாக சப்மிட் ஆவதைத் தடுக்கிறது

    let isFormValid = true;

    // Name Validation
    if (fields.name.value.trim() === "") {
      showError(fields.name, "name-error");
      isFormValid = false;
    } else {
      hideError(fields.name, "name-error");
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email.value.trim())) {
      showError(fields.email, "email-error");
      isFormValid = false;
    } else {
      hideError(fields.email, "email-error");
    }

    // Phone Validation (கட்டாயமில்லை ஆனால் உள்ளிட்டால் 10 எண்கள் இருக்க வேண்டும்)
    const phoneValue = fields.phone.value.trim();
    if (phoneValue !== "" && !/^\d{10}$/.test(phoneValue)) {
      showError(fields.phone, "phone-error");
      isFormValid = false;
    } else {
      hideError(fields.phone, "phone-error");
    }

    // Street Validation
    if (fields.street.value.trim() === "") {
      showError(fields.street, "street-error");
      isFormValid = false;
    } else {
      hideError(fields.street, "street-error");
    }

    // City Validation
    if (fields.city.value.trim() === "") {
      showError(fields.city, "city-error");
      isFormValid = false;
    } else {
      hideError(fields.city, "city-error");
    }

    // அனைத்து விவரங்களும் சரியாக இருந்தால்...
    if (isFormValid) {
      alert("Booking Request Sent Successfully! Thank you.");
      // இங்கு உங்கள் அடுத்த பக்கத்திற்கான லிங்க்கை இணைக்கலாம்
    }
  });

  // எரர் மெசேஜ் காட்டும் ஃபங்க்ஷன்
  function showError(inputElement, errorId) {
    inputElement.closest(".form-group").classList.add("invalid");
  }

  // எரர் மெசேஜை மறைக்கும் ஃபங்க்ஷன்
  function hideError(inputElement, errorId) {
    inputElement.closest(".form-group").classList.remove("invalid");
  }
});
