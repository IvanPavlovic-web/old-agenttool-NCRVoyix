// SUMMARY BUTTON

const tempSummaryButton = document.querySelector("#temp-summary");

const tempSum = function () {
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  // New update request
  const tempFW = document.querySelector("#cust-input-16").value || "N/A";
  const tempModel = document.querySelector("#cust-input-18").value || "N/A";
  const tempAPS = document.querySelector("#cust-input-19").value || "N/A";

  navigator.clipboard.writeText(
    `${tempSummary} // CN ${tempCN} // SN ${tempSN} // CMCID ${tempCMC} // ${tempModel} // FW ${tempFW} // APS ${tempAPS}`
  );
  tempSumNotification.style.display = "block";
  setTimeout(() => {
    tempSumNotification.style.display = "none";
  }, 500);
};

tempSummaryButton.addEventListener("click", tempSum);

// COPY BUTTON

const tempCopyButton = document.querySelector("#temp-copy");

const tempCopy = function () {
  const tempName = document.querySelector("#cust-input-0").value || "N/A";
  const tempPhone = document.querySelector("#cust-input-1").value || "N/A";
  const tempEmail = document.querySelector("#cust-input-2").value || "N/A";
  const tempAddress = document.querySelector("#cust-input-3").value || "N/A";
  const tempEnv = document.querySelector("#cust-input-4").value || "N/A";
  const tempPil = document.querySelector("#cust-input-5").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  const tempTicket = document.querySelector("#cust-input-9").value || "N/A";
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";
  const tempDate = document.querySelector("#cust-input-11").value || "N/A";
  const tempLanes = document.querySelector("#cust-input-12").value || "N/A";
  const tempSeverity = document.querySelector("#cust-input-13").value || "N/A";
  const tempPOSDLL = document.querySelector("#cust-input-14").value || "N/A";
  const tempEPSDLL = document.querySelector("#cust-input-15").value || "N/A";
  const tempFW = document.querySelector("#cust-input-16").value || "N/A";
  const tempOS = document.querySelector("#cust-input-17").value || "N/A";
  const tempPP = document.querySelector("#cust-input-18").value || "N/A";
  const tempAPS = document.querySelector("#cust-input-19").value || "N/A";
  const tempPOS = document.querySelector("#cust-input-20").value || "N/A";
  const tempNotes = document.querySelector("#cust-input-21").value || "N/A";

  navigator.clipboard.writeText(
    `Caller First and Last Name: ${tempName}\nCaller's Phone Number: ${tempPhone}\nCaller's E-mail: ${tempEmail}\nSite's Street Address: ${tempAddress}\n\nEnvironment: ${tempEnv}\nPillar: ${tempPil}\nCompanyID: ${tempCN}\nStoreID: ${tempSN}\nAloha Key (CMCID): ${tempCMC}\nTicket Number: ${tempTicket}\nIssue Summary: ${tempSummary}\nDate when it stopped working: ${tempDate}\nNumber of affected lanes: ${tempLanes}\nSeverity: ${tempSeverity}\nMTX_POS.dll Version: ${tempPOSDLL}\nMTX_EPS.dll Version: ${tempEPSDLL}\nPIN Pad Firmware Version: ${tempFW}\nPIN Pad OS Version: ${tempOS}\nPIN Pad Model: ${tempPP}\nAPS Version: ${tempAPS}\nAloha POS Version: ${tempPOS}\n\nSteps taken to resolve the issue:\n${tempNotes}`
  );
  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};
tempCopyButton.addEventListener("click", tempCopy);

// CHAT QUESTION

const tempChatButton = document.querySelector("#temp-chat");

const tempChat = function () {
  const tempEnv = document.querySelector("#cust-input-4").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  const tempTicket = document.querySelector("#cust-input-9").value || "N/A";
  const tempNotes = document.querySelector("#cust-input-21").value || "N/A";
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";

  navigator.clipboard.writeText(
    `Environment: ${tempEnv} // CN: ${tempCN} // SN: ${tempSN} // CMCID: ${tempCMC} // Ticket: ${tempTicket} // Issue Summary: ${tempSummary}\n\nSteps that were performed:\n\n${tempNotes}`
  );
  tempChatNotification.style.display = "block";
  setTimeout(() => {
    tempChatNotification.style.display = "none";
  }, 500);
};
tempChatButton.addEventListener("click", tempChat);

// NEXT STEPS BUTTON START
const tempNextButton = document.querySelector("#temp-next");

const tempNext = function () {
  const tempNext = document.querySelector("#cust-input-23").value || "N/A";

  navigator.clipboard.writeText(`Next Steps to perform:\n\n${tempNext}`);
  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};

tempNextButton.addEventListener("click", tempNext);
// NEXT STEPS BUTTON END

// SEV1 SLACK

const tempSevButton = document.querySelector("#temp-sev");

const tempSev = function () {
  const tempEnv = document.querySelector("#cust-input-4").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  const tempTicket = document.querySelector("#cust-input-9").value || "N/A";
  const tempNotes = document.querySelector("#cust-input-21").value || "N/A";
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";
  const tempPil = document.querySelector("#cust-input-5").value || "N/A";

  navigator.clipboard.writeText(
    `@here SEV-1 ESCALATION!\n\nPillar: ${tempPil} // Environment: ${tempEnv} // CN: ${tempCN} // SN: ${tempSN} // CMCID: ${tempCMC} // Ticket: ${tempTicket} // Issue Summary: ${tempSummary}\n\nSteps that were performed:\n\n${tempNotes}`
  );
  tempEscNotification.style.display = "block";
  setTimeout(() => {
    tempEscNotification.style.display = "none";
  }, 500);
};
tempSevButton.addEventListener("click", tempSev);

// CLEAR BUTTON

const tempClearButton = document.querySelector("#temp-clear");

const tempClear = function () {
  if (confirm("Are you sure you want to clear the form fields?")) {
    const tempName = (document.querySelector("#cust-input-0").value = "");
    const tempPhone = (document.querySelector("#cust-input-1").value = "");
    const tempEmail = (document.querySelector("#cust-input-2").value = "");
    const tempAddress = (document.querySelector("#cust-input-3").value = "");
    const tempEnv = (document.querySelector("#cust-input-4").selectedIndex = 0);
    const tempPil = (document.querySelector("#cust-input-5").selectedIndex = 0);
    const tempCN = (document.querySelector("#cust-input-6").value = "");
    const tempSN = (document.querySelector("#cust-input-7").value = "");
    const tempCMC = (document.querySelector("#cust-input-8").value = "");
    const tempTicket = (document.querySelector("#cust-input-9").value = "");
    const tempSummary = (document.querySelector("#cust-input-10").value = "");
    const tempDate = (document.querySelector("#cust-input-11").value = "");
    const tempLanes = (document.querySelector("#cust-input-12").value = "");
    const tempSeverity = (document.querySelector(
      "#cust-input-13"
    ).selectedIndex = 0);
    const tempPOSDLL = (document.querySelector("#cust-input-14").value = "");
    const tempEPSDLL = (document.querySelector("#cust-input-15").value = "");
    const tempFW = (document.querySelector("#cust-input-16").value = "");
    const tempOS = (document.querySelector("#cust-input-17").value = "");
    const tempPP = (document.querySelector("#cust-input-18").selectedIndex = 0);
    const tempAPS = (document.querySelector("#cust-input-19").value = "");
    const tempPOS = (document.querySelector("#cust-input-20").value = "");
    const tempNotes = (document.querySelector("#cust-input-21").value = "");
    const tempNext = (document.querySelector("#cust-input-23").value = "");
  }
};
tempClearButton.addEventListener("click", tempClear);

// TECHNICAL ESCALATION
const techOutlookBtn = document.querySelector("#tech-esc");

techOutlookBtn.addEventListener("click", function () {
  const tempEnv = document.querySelector("#cust-input-4").value || "N/A";
  const tempPil = document.querySelector("#cust-input-5").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  const tempTicket = document.querySelector("#cust-input-9").value || "N/A";
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";
  const tempDate = document.querySelector("#cust-input-11").value || "N/A";
  const tempLanes = document.querySelector("#cust-input-12").value || "N/A";
  const tempSeverity = document.querySelector("#cust-input-13").value || "N/A";
  const tempPOSDLL = document.querySelector("#cust-input-14").value || "N/A";
  const tempEPSDLL = document.querySelector("#cust-input-15").value || "N/A";
  const tempFW = document.querySelector("#cust-input-16").value || "N/A";
  const tempOS = document.querySelector("#cust-input-17").value || "N/A";
  const tempPP = document.querySelector("#cust-input-18").value || "N/A";
  const tempAPS = document.querySelector("#cust-input-19").value || "N/A";
  const tempPOS = document.querySelector("#cust-input-20").value || "N/A";
  const tempNotes = document.querySelector("#cust-input-21").value || "N/A";

  // BUFFER SECTION
  const subject = `L3 Tech Escalation // Ticket ${tempTicket} // CN ${tempCN} // SN ${tempSN} // CMCID ${tempCMC}`; // Subject line of the email
  const body = `Environment: ${tempEnv}\nPillar: ${tempPil}\nCompanyID: ${tempCN}\nStoreID: ${tempSN}\nAloha Key: ${tempCMC}\nTicket Number: ${tempTicket}\nIssue Summary: ${tempSummary}\nDate when it stopped working: ${tempDate}\nNumber of affected lanes: ${tempLanes}\nSeverity: ${tempSeverity}\nMTX_POS.dll Version: ${tempPOSDLL}\nMTX_EPS.dll Version: ${tempEPSDLL}\nPIN Pad Firmware Version: ${tempFW}\nPIN Pad OS Version: ${tempOS}\nPIN Pad Model: ${tempPP}\nAPS Version: ${tempAPS}\nAloha POS Version: ${tempPOS}\n\nSteps taken to resolve the issue:\n${tempNotes}`;

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});
// CUSTOMER ESCALATION
const custOutlookBtn = document.querySelector("#cust-esc");

custOutlookBtn.addEventListener("click", function () {
  const tempEnv = document.querySelector("#cust-input-4").value || "N/A";
  const tempPil = document.querySelector("#cust-input-5").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  const tempTicket = document.querySelector("#cust-input-9").value || "N/A";
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";
  const tempDate = document.querySelector("#cust-input-11").value || "N/A";
  const tempLanes = document.querySelector("#cust-input-12").value || "N/A";
  const tempSeverity = document.querySelector("#cust-input-13").value || "N/A";
  const tempPOSDLL = document.querySelector("#cust-input-14").value || "N/A";
  const tempEPSDLL = document.querySelector("#cust-input-15").value || "N/A";
  const tempFW = document.querySelector("#cust-input-16").value || "N/A";
  const tempOS = document.querySelector("#cust-input-17").value || "N/A";
  const tempPP = document.querySelector("#cust-input-18").value || "N/A";
  const tempAPS = document.querySelector("#cust-input-19").value || "N/A";
  const tempPOS = document.querySelector("#cust-input-20").value || "N/A";
  const tempNotes = document.querySelector("#cust-input-21").value || "N/A";

  // BUFFER SECTION
  const subject = `L3 Customer Escalation // Ticket ${tempTicket} // CN ${tempCN} // SN ${tempSN} // CMCID ${tempCMC}`; // Subject line of the email
  const body = `Environment: ${tempEnv}\nPillar: ${tempPil}\nCompanyID: ${tempCN}\nStoreID: ${tempSN}\nAloha Key: ${tempCMC}\nTicket Number: ${tempTicket}\nIssue Summary: ${tempSummary}\nDate when it stopped working: ${tempDate}\nNumber of affected lanes: ${tempLanes}\nSeverity: ${tempSeverity}\nMTX_POS.dll Version: ${tempPOSDLL}\nMTX_EPS.dll Version: ${tempEPSDLL}\nPIN Pad Firmware Version: ${tempFW}\nPIN Pad OS Version: ${tempOS}\nPIN Pad Model: ${tempPP}\nAPS Version: ${tempAPS}\nAloha POS Version: ${tempPOS}\n\nSteps taken to resolve the issue:\n${tempNotes}`;

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});

// SAVE AS .TXT FORMAT

const saveAsTxtButton = document.querySelector("#save-txt-button");

const saveAsTxt = function () {
  const tempName = document.querySelector("#cust-input-0").value || "N/A";
  const tempPhone = document.querySelector("#cust-input-1").value || "N/A";
  const tempEmail = document.querySelector("#cust-input-2").value || "N/A";
  const tempAddress = document.querySelector("#cust-input-3").value || "N/A";
  const tempEnv = document.querySelector("#cust-input-4").value || "N/A";
  const tempPil = document.querySelector("#cust-input-5").value || "N/A";
  const tempCN = document.querySelector("#cust-input-6").value || "N/A";
  const tempSN = document.querySelector("#cust-input-7").value || "N/A";
  const tempCMC = document.querySelector("#cust-input-8").value || "N/A";
  const tempTicket = document.querySelector("#cust-input-9").value || "N/A";
  const tempSummary = document.querySelector("#cust-input-10").value || "N/A";
  const tempDate = document.querySelector("#cust-input-11").value || "N/A";
  const tempLanes = document.querySelector("#cust-input-12").value || "N/A";
  const tempSeverity = document.querySelector("#cust-input-13").value || "N/A";
  const tempPOSDLL = document.querySelector("#cust-input-14").value || "N/A";
  const tempEPSDLL = document.querySelector("#cust-input-15").value || "N/A";
  const tempFW = document.querySelector("#cust-input-16").value || "N/A";
  const tempOS = document.querySelector("#cust-input-17").value || "N/A";
  const tempPP = document.querySelector("#cust-input-18").value || "N/A";
  const tempAPS = document.querySelector("#cust-input-19").value || "N/A";
  const tempPOS = document.querySelector("#cust-input-20").value || "N/A";
  const tempNotes = document.querySelector("#cust-input-21").value || "N/A";

  const fileNameInput = prompt(
    "Enter a File Name (or Leave Blank to use Default):"
  );
  const fileName =
    fileNameInput ||
    `${tempSummary} - CN ${tempCN} - SN ${tempSN} - CMC ${tempCMC} - CaseID ${tempTicket}.txt`;

  const txtContent = `Caller First and Last Name: ${tempName}\nCaller's Phone Number: ${tempPhone}\nCaller's E-mail: ${tempEmail}\nSite's Street Address: ${tempAddress}\n\nEnvironment: ${tempEnv}\nPillar: ${tempPil}\nCompanyID: ${tempCN}\nStoreID: ${tempSN}\nAloha Key (CMCID): ${tempCMC}\nTicket Number: ${tempTicket}\nIssue Summary: ${tempSummary}\nDate when it stopped working: ${tempDate}\nNumber of affected lanes: ${tempLanes}\nSeverity: ${tempSeverity}\nMTX_POS.dll Version: ${tempPOSDLL}\nMTX_EPS.dll Version: ${tempEPSDLL}\nPIN Pad Firmware Version: ${tempFW}\nPIN Pad OS Version: ${tempOS}\nPIN Pad Model: ${tempPP}\nAPS Version: ${tempAPS}\nAloha POS Version: ${tempPOS}\n\nSteps taken to resolve the issue:\n${tempNotes}`;

  const blob = new Blob([txtContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  link.click();

  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};

saveAsTxtButton.addEventListener("click", saveAsTxt);
