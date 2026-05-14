document.addEventListener("DOMContentLoaded", () => {
  // 1. முந்தைய பக்கத்தில் இருந்து வரும் பேக்கேஜ் பெயர் மற்றும் விலையை வாசித்தல்
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

  // 2. கேலண்டர் மற்றும் நேர மாற்றங்களைக் கவனிக்கும் லாஜிக்
  const dateInput = document.getElementById("booking-date");
  const slotDayHeading = document.getElementById("slot-day-heading");
  const liveDatetimeText = document.getElementById("live-datetime-text");
  const timeSlots = document.querySelectorAll(".time-slot-btn");

  let selectedTimeSlot = "2:30 Am"; // டிஃபால்ட் டைம்

  // வார நாட்களின் பெயர்கள்
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

  // தேதி மற்றும் நேரத்தை மாற்றி அமைக்கும் மெயின் ஃபங்க்ஷன்
  function updateLiveDateTime() {
    const dateValue = new Date(dateInput.value);
    if (!isNaN(dateValue.getTime())) {
      const dayName = daysArray[dateValue.getDay()];
      const dateNum = dateValue.getDate();
      const monthName = monthsArray[dateValue.getMonth()];
      const yearNum = dateValue.getFullYear();

      // ஸ்லாட் ஹெடிங்கை மாற்றுதல் (எ.கா: Availability For Monday 12 May)
      slotDayHeading.textContent = `Availability For ${dayName} ${dateNum} ${monthName}`;

      // மெயின் சம்மரி டெக்ஸ்ட்டை மாற்றுதல் (எ.கா: 12 May 2026 At 2:30 Am)
      liveDatetimeText.textContent = `${dateNum} ${monthName} ${yearNum} At ${selectedTimeSlot}`;
    }
  }

  // கேலண்டர் தேதியை மாற்றும்போது...
  dateInput.addEventListener("change", updateLiveDateTime);

  // ஏதாவது ஒரு டைம் ஸ்லாட்டை கிளிக் செய்யும்போது...
  timeSlots.forEach((slot) => {
    // ஆரம்பத்தில் 2:30 Am ஸ்லாட்டை செலக்ட் செய்து வைக்கிறது
    if (slot.getAttribute("data-time") === selectedTimeSlot) {
      slot.classList.add("selected");
    }

    slot.addEventListener("click", (e) => {
      // பழைய செலக்சனை நீக்குகிறது
      timeSlots.forEach((s) => s.classList.remove("selected"));

      // புதிய ஸ்லாட்டை செலக்ட் செய்கிறது
      e.currentTarget.classList.add("selected");
      selectedTimeSlot = e.currentTarget.getAttribute("data-time");

      // தகவலைப் புதுப்பிக்கிறது
      updateLiveDateTime();
    });
  });

  // புக்கிங் பட்டன் கன்பர்மேஷன் அலர்ட்
  const submitBtn = document.getElementById("submit-booking-btn");
  submitBtn.addEventListener("click", () => {
    alert(
      `Your request for "Bridal Makeup ${requestedPackageName}" has been submitted successfully!`,
    );
  });

  // பக்கம் லோட் ஆகும்போது ஆரம்ப நிலையை இயக்குகிறது
  updateLiveDateTime();
});
