const onSummary = document.getElementById("on-input-0");
const onTicket = document.getElementById("on-input-1");
const onCN = document.getElementById("on-input-2");
const onSN = document.getElementById("on-input-3");
const onCMC = document.getElementById("on-input-4");
const summaryParagraph = document.querySelector(".on-header");
const copySummaryButton = document.getElementById("on-summary");

function updateSummary() {
  const summary = onSummary.value;
  const ticket = onTicket.value;
  const company = onCN.value;
  const store = onSN.value;
  const aloha = onCMC.value;
  let summaryText = `Overnight Support Task // CN ${company} // SN ${store}`;
  if (aloha && company) {
    summaryText += ` // CMCID ${aloha}`;
  }
  if (summary) {
    summaryText += ` // ${summary}`;
  }
  if (ticket) {
    summaryText += ` // ${ticket}`;
  }
  summaryParagraph.textContent = summaryText;
}

onSummary.addEventListener("input", updateSummary);
onTicket.addEventListener("input", updateSummary);
onCN.addEventListener("input", updateSummary);
onSN.addEventListener("input", updateSummary);
onCMC.addEventListener("input", updateSummary);

copySummaryButton.addEventListener("click", () => {
  const summaryText = summaryParagraph.textContent;
  const el = document.createElement("textarea");
  el.value = summaryText;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  //
  tempSumNotification.style.display = "block";
  setTimeout(() => {
    tempSumNotification.style.display = "none";
  }, 500);
});

// OVERNIGHT COPY

const onButton = document.querySelector("#on-copy");

const onCopy = function () {
  const onTicket = document.querySelector("#on-input-1").value || "N/A";
  const onCN = document.querySelector("#on-input-2").value || "N/A";
  const onSN = document.querySelector("#on-input-3").value || "N/A";
  const onCMC = document.querySelector("#on-input-4").value || "N/A";

  // OLD PROFILE 1
  const oldProfile_1 = document.querySelector("#o1-input-0").value || "N/A";
  const oldHost_1 = document.querySelector("#o1-input-1").value || "N/A";
  const oldMID_1 = document.querySelector("#o1-input-2").value || "N/A";
  const oldTID_1 = document.querySelector("#o1-input-3").value || "N/A";
  const oldPlatform_1 = document.querySelector("#o1-input-4").value || "N/A";
  const oldBID_1 = document.querySelector("#o1-input-5").value || "N/A";

  // OLD PROFILE 2
  const oldProfile_2 = document.querySelector("#o2-input-0").value || "N/A";
  const oldHost_2 = document.querySelector("#o2-input-1").value || "N/A";
  const oldMID_2 = document.querySelector("#o2-input-2").value || "N/A";
  const oldTID_2 = document.querySelector("#o2-input-3").value || "N/A";
  const oldPlatform_2 = document.querySelector("#o2-input-4").value || "N/A";
  const oldBID_2 = document.querySelector("#o2-input-5").value || "N/A";

  // NEW PROFILE 1
  const newProfile_1 = document.querySelector("#n1-input-0").value || "N/A";
  const newHost_1 = document.querySelector("#n1-input-1").value || "N/A";
  const newMID_1 = document.querySelector("#n1-input-2").value || "N/A";
  const newTID_1 = document.querySelector("#n1-input-3").value || "N/A";
  const newPlatform_1 = document.querySelector("#n1-input-4").value || "N/A";
  const newBID_1 = document.querySelector("#n1-input-5").value || "N/A";

  // NEW PROFILE 2
  const newProfile_2 = document.querySelector("#n2-input-0").value || "N/A";
  const newHost_2 = document.querySelector("#n2-input-1").value || "N/A";
  const newMID_2 = document.querySelector("#n2-input-2").value || "N/A";
  const newTID_2 = document.querySelector("#n2-input-3").value || "N/A";
  const newPlatform_2 = document.querySelector("#n2-input-4").value || "N/A";
  const newBID_2 = document.querySelector("#n2-input-5").value || "N/A";

  const onUS = document.querySelector("#on-input-5").value || "N/A";
  const onBL = document.querySelector("#on-input-6").value || "N/A";
  const onNotes = document.querySelector("#on-input-7").value || "N/A";

  navigator.clipboard.writeText(
    `Ticket Number: ${onTicket}\nCompany Number: ${onCN}\nStore Number: ${onSN}\nAloha Key: ${onCMC}\n\nOld Profile/Tenders 1: ${oldProfile_1}\nOld Host 1: ${oldHost_1}\nOld MID 1: ${oldMID_1}\nOld TID 1: ${oldTID_1}\nOld Platform 1: ${oldPlatform_1}\nOld BankID 1: ${oldBID_1}\n\nNew Profile/Tenders 1: ${newProfile_1}\nNew Host 1: ${newHost_1}\nNew MID 1: ${newMID_1}\nNew TID 1: ${newTID_1}\nNew Platform 1: ${newPlatform_1}\nNew BankID 1: ${newBID_1}\n\nOld Profile/Tenders 2: ${oldProfile_2}\nOld Host 2: ${oldHost_2}\nOld MID 2: ${oldMID_2}\nOld TID 2: ${oldTID_2}\nOld Platform 2: ${oldPlatform_2}\nOld BankID 2: ${oldBID_2}\n\nNew Profile/Tenders 2: ${newProfile_2}\nNew Host 2: ${newHost_2}\nNew MID 2: ${newMID_2}\nNew TID 2: ${newTID_2}\nNew Platform 2: ${newPlatform_2}\nNew BankID 2: ${newBID_2}\n\nAdditional Notes: ${onNotes}\n\nTime of change (US): ${onUS}\nTime of change (BL): ${onBL}`
  );
  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};
onButton.addEventListener("click", onCopy);

// CLEAR BUTTON

const onClearButton = document.querySelector("#on-clear");

const onClear = function () {
  if (confirm("Are you sure you want to clear the form fields?")) {
    const onSummary = (document.querySelector("#on-input-0").value = "");
    const onTicket = (document.querySelector("#on-input-1").value = "");
    const onCN = (document.querySelector("#on-input-2").value = "");
    const onSN = (document.querySelector("#on-input-3").value = "");
    const onCMC = (document.querySelector("#on-input-4").value = "");

    // OLD PROFILE 1
    const oldProfile_1 = (document.querySelector("#o1-input-0").value = "");
    const oldHost_1 = (document.querySelector("#o1-input-1").value = "");
    const oldMID_1 = (document.querySelector("#o1-input-2").value = "");
    const oldTID_1 = (document.querySelector("#o1-input-3").value = "");
    const oldPlatform_1 = (document.querySelector("#o1-input-4").value = "");
    const oldBID_1 = (document.querySelector("#o1-input-5").value = "");

    // OLD PROFILE 2
    const oldProfile_2 = (document.querySelector("#o2-input-0").value = "");
    const oldHost_2 = (document.querySelector("#o2-input-1").value = "");
    const oldMID_2 = (document.querySelector("#o2-input-2").value = "");
    const oldTID_2 = (document.querySelector("#o2-input-3").value = "");
    const oldPlatform_2 = (document.querySelector("#o2-input-4").value = "");
    const oldBID_2 = (document.querySelector("#o2-input-5").value = "");

    // NEW PROFILE 1
    const newProfile_1 = (document.querySelector("#n1-input-0").value = "");
    const newHost_1 = (document.querySelector("#n1-input-1").value = "");
    const newMID_1 = (document.querySelector("#n1-input-2").value = "");
    const newTID_1 = (document.querySelector("#n1-input-3").value = "");
    const newPlatform_1 = (document.querySelector("#n1-input-4").value = "");
    const newBID_1 = (document.querySelector("#n1-input-5").value = "");

    // NEW PROFILE 2
    const newProfile_2 = (document.querySelector("#n2-input-0").value = "");
    const newHost_2 = (document.querySelector("#n2-input-1").value = "");
    const newMID_2 = (document.querySelector("#n2-input-2").value = "");
    const newTID_2 = (document.querySelector("#n2-input-3").value = "");
    const newPlatform_2 = (document.querySelector("#n2-input-4").value = "");
    const newBID_2 = (document.querySelector("#n2-input-5").value = "");

    const onUS = (document.querySelector("#on-input-5").value = "");
    const onBL = (document.querySelector("#on-input-6").value = "");
    const onNotes = (document.querySelector("#on-input-7").value = "");

    const summaryParagraph = document.querySelector(".on-header");
    summaryParagraph.textContent = "Overnight Support Task // CN // SN // //";
  }
};
onClearButton.addEventListener("click", onClear);

const onTMZButton = document.querySelector("#on-tmz");

onTMZButton.addEventListener("click", function () {
  document.querySelector("#section-bonus").classList.remove("hidden");
  document.querySelector("#section-bonus").style.display = "block";
  document.querySelector("#section-4").style.display = "none";
});

const tmzONButton = document.querySelector("#on-tmz-on");

tmzONButton.addEventListener("click", function () {
  document.querySelector("#section-4").style.display = "block";
  document.querySelector("#section-bonus").style.display = "none";
});
