//
// RMA - Clear button script [START]
//

const rmaClearButton = document.querySelector("#rma-clear");

const rmaClear = function () {
  if (confirm("Are you sure you want to clear the form fields?")) {
    const rmaName = (document.querySelector("#rma-input-0").value = "");
    const rmaPhone = (document.querySelector("#rma-input-1").value = "");
    const rmaMail = (document.querySelector("#rma-input-3").value = "");
    const rmaAddress = (document.querySelector("#rma-input-4").value = "");
    const rmaCN = (document.querySelector("#rma-input-5").value = "");
    const rmaSN = (document.querySelector("#rma-input-6").value = "");
    const rmaCMC = (document.querySelector("#rma-input-7").value = "");
    const rmaTicket = (document.querySelector("#rma-input-8").value = "");
    const rmaSummary = (document.querySelector("#rma-input-9").value = "");
    const rmaError = (document.querySelector("#rma-input-11").value = "");
    const rmaNotes = (document.querySelector("#rma-input-16").value = "");
    const rmaFirmware = (document.querySelector("#rma-input-19").value = "");
    const rmaModel = (document.querySelector(
      "#rma-input-10"
    ).selectedIndex = 0);
    const rmaDriver = (document.querySelector(
      "#rma-input-13"
    ).selectedIndex = 0);
    const rmaPort = (document.querySelector("#rma-input-12").selectedIndex = 0);
    const rmaPD = (document.querySelector("#rma-input-14").selectedIndex = 0);
    const rmaSLA = (document.querySelector("#rma-input-20").selectedIndex = 0);
    const rmaST = (document.querySelector("#rma-input-15").selectedIndex = 0);
    const rmaWST = (document.querySelector("#rma-input-17").selectedIndex = 0);
    const rmaCable = (document.querySelector(
      "#rma-input-18"
    ).selectedIndex = 0);
  }
};
rmaClearButton.addEventListener("click", rmaClear);

//
// RMA - Clear button script [END]
//

//
// RMA - COPY FOR TEAMS/ CHAT [START]
//

const rmaTeamsCopyButton = document.querySelector("#rma-copy-teams");

const rmaTeamsCopy = function () {
  const rmaCN = document.querySelector("#rma-input-5").value || "N/A";
  const rmaSN = document.querySelector("#rma-input-6").value || "N/A";
  const rmaCMC = document.querySelector("#rma-input-7").value || "N/A";
  const rmaTicket = document.querySelector("#rma-input-8").value || "N/A";
  const rmaSummary = document.querySelector("#rma-input-9").value || "N/A";
  const rmaModel = document.querySelector("#rma-input-10").value || "N/A";
  const rmaCable = document.querySelector("#rma-input-18").value || "N/A";
  const rmaError = document.querySelector("#rma-input-11").value || "N/A";
  const rmaPort = document.querySelector("#rma-input-12").value || "N/A";
  const rmaDriver = document.querySelector("#rma-input-13").value || "N/A";
  const rmaPD = document.querySelector("#rma-input-14").value || "N/A";
  const rmaST = document.querySelector("#rma-input-15").value || "N/A";
  const rmaWST = document.querySelector("#rma-input-17").value || "N/A";
  const rmaNotes = document.querySelector("#rma-input-16").value || "N/A";
  const rmaFirmware = document.querySelector("#rma-input-19").value || "N/A";
  const rmaSLA = document.querySelector("#rma-input-20").value || "N/A";

  navigator.clipboard.writeText(
    `CN: ${rmaCN}\nSN: ${rmaSN}\nCMCID: ${rmaCMC}\nTicket Number: ${rmaTicket}\nIssue Summary: ${rmaSummary}\n\nPIN Pad Model: ${rmaModel}\nFirmware version: ${rmaFirmware}\nCable Type: ${rmaCable}\nError message on the PIN Pad / POS: ${rmaError}\nContractual RMA SLA: ${rmaSLA}\n\nPIN Pad visible under COM port? ${rmaPort}\nUSB Drivers up-to-date / reinstalled? ${rmaDriver}\nPIN Pad Power Drained? ${rmaPD}\nPIN Pad swapped to a different Terminal? ${rmaST}\nPIN Pad working on another Terminal? ${rmaWST}\n\nAdditional Troubleshooting: ${rmaNotes}\n`
  );
  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};
rmaTeamsCopyButton.addEventListener("click", rmaTeamsCopy);

//
// RMA - COPY FOR TEAMS/ CHAT [END]
//

//
// RMA - COPY SUMMARY [START]
//

const rmaSumCopyButton = document.querySelector("#rma-copy-sum");

const rmaSum = function () {
  const rmaSummary = document.querySelector("#rma-input-9").value || "N/A";
  const rmaCN = document.querySelector("#rma-input-5").value || "N/A";
  const rmaSN = document.querySelector("#rma-input-6").value || "N/A";
  const rmaCMC = document.querySelector("#rma-input-7").value || "N/A";
  const rmaModel = document.querySelector("#rma-input-10").value || "N/A";
  const rmaCable = document.querySelector("#rma-input-18").value || "N/A";

  navigator.clipboard.writeText(
    `${rmaSummary} // CN ${rmaCN} // SN ${rmaSN} // CMCID ${rmaCMC} // ${rmaModel} // Cable Type ${rmaCable}`
  );
  tempSumNotification.style.display = "block";
  setTimeout(() => {
    tempSumNotification.style.display = "none";
  }, 500);
};

rmaSumCopyButton.addEventListener("click", rmaSum);

//
// RMA - COPY SUMMARY [END]
//

//
// RMA - COPY ALL [START]
//

const rmaCopyButton = document.querySelector("#rma-copy");

const rmaCopy = function () {
  const rmaName = document.querySelector("#rma-input-0").value || "N/A";
  const rmaPhone = document.querySelector("#rma-input-1").value || "N/A";
  const rmaMail = document.querySelector("#rma-input-3").value || "N/A";
  const rmaAddress = document.querySelector("#rma-input-4").value || "N/A";
  const rmaCN = document.querySelector("#rma-input-5").value || "N/A";
  const rmaSN = document.querySelector("#rma-input-6").value || "N/A";
  const rmaCMC = document.querySelector("#rma-input-7").value || "N/A";
  const rmaTicket = document.querySelector("#rma-input-8").value || "N/A";
  const rmaSummary = document.querySelector("#rma-input-9").value || "N/A";
  const rmaModel = document.querySelector("#rma-input-10").value || "N/A";
  const rmaCable = document.querySelector("#rma-input-18").value || "N/A";
  const rmaError = document.querySelector("#rma-input-11").value || "N/A";
  const rmaPort = document.querySelector("#rma-input-12").value || "N/A";
  const rmaDriver = document.querySelector("#rma-input-13").value || "N/A";
  const rmaPD = document.querySelector("#rma-input-14").value || "N/A";
  const rmaST = document.querySelector("#rma-input-15").value || "N/A";
  const rmaWST = document.querySelector("#rma-input-17").value || "N/A";
  const rmaNotes = document.querySelector("#rma-input-16").value || "N/A";
  const rmaFirmware = document.querySelector("#rma-input-19").value || "N/A";
  const rmaSLA = document.querySelector("#rma-input-20").value || "N/A";

  navigator.clipboard.writeText(
    `Caller First and Last Name: ${rmaName}\nCaller's Phone Number: ${rmaPhone}\nCaller's Email Address: ${rmaMail}\nSite's Street Address: ${rmaAddress}\n\nCN: ${rmaCN}\nSN: ${rmaSN}\nCMCID: ${rmaCMC}\nTicket Number: ${rmaTicket}\nIssue Summary: ${rmaSummary}\n\nPIN Pad Model: ${rmaModel}\nFirmware version: ${rmaFirmware}\nCable Type: ${rmaCable}\nError message on the PIN Pad / POS: ${rmaError}\nContractual RMA SLA: ${rmaSLA}\n\nPIN Pad visible under COM port? ${rmaPort}\nUSB Drivers up-to-date / reinstalled? ${rmaDriver}\nPIN Pad Power Drained? ${rmaPD}\nPIN Pad swapped to a different Terminal? ${rmaST}\nPIN Pad working on another Terminal? ${rmaWST}\n\nAdditional Troubleshooting: ${rmaNotes}\n`
  );
  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};
rmaCopyButton.addEventListener("click", rmaCopy);

//
// RMA - COPY ALL [END]
//

//
// LINKS [START]
//

// SMB - Small Medium Business

const rmaSMBButton = document.querySelector("#rma-guide-0");

const rmaSMB = function () {
  showInternalResourceNotice();
};

rmaSMBButton.addEventListener("click", rmaSMB);

// ENT - Enterprise

const rmaENTButton = document.querySelector("#rma-guide-1");

const rmaENT = function () {
  showInternalResourceNotice();
};

rmaENTButton.addEventListener("click", rmaENT);

// RSG - Reseller

const rmaRSGButton = document.querySelector("#rma-guide-2");

const rmaRSG = function () {
  showInternalResourceNotice();
};

rmaRSGButton.addEventListener("click", rmaRSG);

// COMMON - Retail

const rmaCOMMONButton = document.querySelector("#rma-guide-3");

const rmaCOMMON = function () {
  showInternalResourceNotice();
};

rmaCOMMONButton.addEventListener("click", rmaCOMMON);

// HARDWARE LINK

const rmaHardwareLinkButton = document.querySelector("#rma-guide-4");

const rmaHardware = function () {
  showInternalResourceNotice();
};

rmaHardwareLinkButton.addEventListener("click", rmaHardware);

//
// LINKS [END]
//
