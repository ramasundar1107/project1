document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pkgName = urlParams.get("package") || "Luxury Package";
  const pkgPrice = urlParams.get("price") || "25000";
  const bookingDate = urlParams.get("date") || "12 May 2026";
  const bookingTime = urlParams.get("time") || "2:30 Am";

  document.getElementById("summary-package-name").textContent =
    `Bridal Makeup ${pkgName}`;
  document.getElementById("summary-package-price").textContent =
    `Rs ${pkgPrice} Negotiable`;
  document.getElementById("summary-datetime").textContent =
    `${bookingDate} At ${bookingTime}`;
  document.getElementById("summary-total-price").textContent =
    `Rs ${pkgPrice} Negotiable`;

  const backLink = document.getElementById("back-to-calendar");
  backLink.href = `calendar.html?package=${encodeURIComponent(pkgName)}&price=${encodeURIComponent(pkgPrice)}`;

  const form = document.getElementById("client-info-form");

  const fields = {
    name: document.getElementById("client-name"),
    email: document.getElementById("client-email"),
    phone: document.getElementById("client-phone"),
    street: document.getElementById("client-street"),
    city: document.getElementById("client-city"),
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

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

    if (isFormValid) {
      alert("Booking Request Sent Successfully! Thank you.");
    }
  });

  function showError(inputElement, errorId) {
    inputElement.closest(".form-group").classList.add("invalid");
  }

  function hideError(inputElement, errorId) {
    inputElement.closest(".form-group").classList.remove("invalid");
  }
});
