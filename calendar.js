document.addEventListener("DOMContentLoaded", () => {
  const windowUrlParameters = new URLSearchParams(window.location.search);
  const requestedPackageName =
    windowUrlParameters.get("package") || "Luxury Package";
  const requestedPackagePrice = windowUrlParameters.get("price") || "25000";

  const displayTitleTextElement = document.getElementById(
    "selected-package-name",
  );
  const displayPriceTextElement = document.getElementById(
    "selected-package-price",
  );

  displayTitleTextElement.textContent = `Bridal Makeup ${requestedPackageName}`;
  displayPriceTextElement.textContent = `Rs ${requestedPackagePrice} Negotiable`;

  const dateInput = document.getElementById("booking-date");
  const slotDayHeading = document.getElementById("slot-day-heading");
  const liveDatetimeText = document.getElementById("live-datetime-text");
  const timeSlots = document.querySelectorAll(".time-slot-btn");

  let selectedTimeSlot = "2:30 Am"; 

  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function updateLiveDateTime() {
    const dateValue = new Date(dateInput.value);
    if (!isNaN(dateValue.getTime())) {
      const dayName = daysArray[dateValue.getDay()];
      const dateNum = dateValue.getDate();
      const monthName = monthsArray[dateValue.getMonth()];
      const yearNum = dateValue.getFullYear();

      slotDayHeading.textContent = `Availability For ${dayName} ${dateNum} ${monthName}`;

      liveDatetimeText.textContent = `${dateNum} ${monthName} ${yearNum} At ${selectedTimeSlot}`;
    }
  }

  dateInput.addEventListener("change", updateLiveDateTime);

  timeSlots.forEach((slot) => {
    if (slot.getAttribute("data-time") === selectedTimeSlot) {
      slot.classList.add("selected");
    }

    slot.addEventListener("click", (e) => {
      timeSlots.forEach((s) => s.classList.remove("selected"));

      e.currentTarget.classList.add("selected");
      selectedTimeSlot = e.currentTarget.getAttribute("data-time");

      updateLiveDateTime();
    });
  });

  const submitBtn = document.getElementById("submit-booking-btn");
  submitBtn.addEventListener("click", () => {
    alert(
      `Your request for "Bridal Makeup ${requestedPackageName}" has been submitted successfully!`,
    );
  });

  updateLiveDateTime();
});
