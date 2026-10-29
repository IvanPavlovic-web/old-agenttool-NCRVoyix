const vacBtn = document.querySelector("#vac-btn");
const shiftBtn = document.querySelector("#shift-btn");
const plBtn = document.querySelector("#pl-btn");
const sickBtn = document.querySelector("#sick-btn");

const vacSection = document.querySelector("#vac-card");
const shiftSection = document.querySelector("#shift-card");
const plSection = document.querySelector("#pl-card");
const sickSection = document.querySelector("#sick-card");

// Show the default section
vacSection.classList.remove("hidden");

// Toggle the visibility of the sections when the buttons are clicked
shiftBtn.addEventListener("click", function () {
  // Hide all other sections
  vacSection.classList.add("hidden");
  plSection.classList.add("hidden");
  sickSection.classList.add("hidden");

  // Show the shift section
  shiftSection.classList.remove("hidden");
});

plBtn.addEventListener("click", function () {
  // Hide all other sections
  vacSection.classList.add("hidden");
  shiftSection.classList.add("hidden");
  sickSection.classList.add("hidden");

  // Show the pl section
  plSection.classList.remove("hidden");
});

sickBtn.addEventListener("click", function () {
  // Hide all other sections
  vacSection.classList.add("hidden");
  shiftSection.classList.add("hidden");
  plSection.classList.add("hidden");

  // Show the sick section
  sickSection.classList.remove("hidden");
});

vacBtn.addEventListener("click", function () {
  // Hide all other sections
  shiftSection.classList.add("hidden");
  plSection.classList.add("hidden");
  sickSection.classList.add("hidden");

  // Show the default section
  vacSection.classList.remove("hidden");
});

// EMAIL BUTTONS

// VACATION REQUEST

const vacOutlookBtn = document.querySelector("#vac-esc");

vacOutlookBtn.addEventListener("click", function () {
  const vacName = document.querySelector("#vac-input-0").value;
  const startDay = document.querySelector("#vac-input-1").value;
  const startMonth = document.querySelector("#vac-input-2").value;
  const startNumDay = document.querySelector("#vac-input-3").value;

  const endDay = document.querySelector("#vac-input-5").value;
  const endMonth = document.querySelector("#vac-input-6").value;
  const endNumDay = document.querySelector("#vac-input-7").value;

  const workDay = document.querySelector("#vac-input-8").value;
  const workMonth = document.querySelector("#vac-input-9").value;
  const workNumDay = document.querySelector("#vac-input-10").value;

  const subject = `[PTO] - ${vacName}`;
  const body = `Hello Leadership,\n\nI would like to submit an annual leave request for the period from ${startDay}, ${startMonth} the ${startNumDay} until ${endDay}, ${endMonth} the ${endNumDay}.\n\nMy first working day after the annual leave will be ${workDay}, ${workMonth} the ${workNumDay}.\n\nThanks in advance!`;

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});

// SHIFT SWAP

const shiftOutlookBtn = document.querySelector("#shift-esc");

shiftOutlookBtn.addEventListener("click", function () {
  const shiftMe = document.querySelector("#shift-input-0").value;
  const shiftAgent = document.querySelector("#shift-input-1").value;
  const myShift = document.querySelector("#shift-input-2").value;
  const agentShift = document.querySelector("#shift-input-3").value;
  const shiftMonth = document.querySelector("#shift-input-4").value;

  const subject = `[Shift Swap] - ${shiftMe}`;

  const body = `Hello Leadership,\n\nI would like to submit a Shift Swap with ${shiftAgent}. I would work ${agentShift} and ${shiftAgent} would work ${myShift}.\n\nThis is for the month of ${shiftMonth}\n\nThanks in advance!`;

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});

// PAID LEAVE

const plOutlookBtn = document.querySelector("#pl-esc");

plOutlookBtn.addEventListener("click", function () {
  const plMe = document.querySelector("#pl-input-0").value;
  const startDay = document.querySelector("#pl-input-1").value;
  const startMonth = document.querySelector("#pl-input-2").value;
  const startNumDay = document.querySelector("#pl-input-3").value;

  const endDay = document.querySelector("#pl-input-4").value;
  const endMonth = document.querySelector("#pl-input-5").value;
  const endNumDay = document.querySelector("#pl-input-6").value;

  const plReason = document.querySelector("#pl-input-7").value;

  const subject = `[PTO] - ${plMe}`;

  const body = `Hello Leadership,\n\nI would like to submit a Paid Leave request for the period from ${startDay}, ${startMonth} the ${startNumDay} until ${endDay}, ${endMonth} the ${endNumDay}.\n\nReason for the Paid Leave is ${plReason}.\n\nThanks in advance!`;

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});

// SICK LEAVE

const sickOutlookBtn = document.querySelector("#sick-esc");

sickOutlookBtn.addEventListener("click", function () {
  const name = document.querySelector("#sick-input-0").value;
  const day = document.querySelector("#sick-input-1").value;
  const month = document.querySelector("#sick-input-2").value;
  const numDay = document.querySelector("#sick-input-3").value;

  const subject = `[Sick Leave] - ${name}`;

  const body = `Hello Leadership,\n\nI would like to inform you that I will be on Sick Leave from ${day}, ${month} the ${numDay}.\n\nI will update the thread with a scanned Doctor's notice as soon as I acquire one.\n\nThanks in advance!`;

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});
