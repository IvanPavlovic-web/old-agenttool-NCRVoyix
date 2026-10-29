// SORR SUMMARY BUTTON

const sorrSumButton = document.querySelector("#sorr-summary");

const sorrSum = function () {
  const sorrSum = document.querySelector("#sorr-input-6").value || "N/A";
  const sorrCN = document.querySelector("#sorr-input-3").value || "N/A";
  const sorrSN = document.querySelector("#sorr-input-4").value || "N/A";
  const sorrCMCID = document.querySelector("#sorr-input-5").value || "N/A";

  navigator.clipboard.writeText(
    `${sorrSum} // CN ${sorrCN} // SN ${sorrSN} // CMCID ${sorrCMCID}`,
  );
  tempSumNotification.style.display = "block";
  setTimeout(() => {
    tempSumNotification.style.display = "none";
  }, 500);
};

sorrSumButton.addEventListener("click", sorrSum);

// SORR COPY BUTTON

const sorrCopyButton = document.querySelector("#sorr-copy");

const sorrCopy = function () {
  const sorrName = document.querySelector("#sorr-input-0").value || "N/A";
  const sorrPhone = document.querySelector("#sorr-input-1").value || "N/A";
  const sorrEmail = document.querySelector("#sorr-input-2").value || "N/A";
  const sorrCN = document.querySelector("#sorr-input-3").value || "N/A";
  const sorrSN = document.querySelector("#sorr-input-4").value || "N/A";
  const sorrCMCID = document.querySelector("#sorr-input-5").value || "N/A";
  const sorrSum = document.querySelector("#sorr-input-6").value || "N/A";
  const sorrDisFrom = document.querySelector("#sorr-input-7").value || "N/A";
  const sorrDisTo = document.querySelector("#sorr-input-8").value || "N/A";
  const sorrAmt = document.querySelector("#sorr-input-9").value || "N/A";
  const sorrNote = document.querySelector("#sorr-input-10").value || "N/A";

  navigator.clipboard.writeText(
    `Caller First and Last Name: ${sorrName}\nCaller's Phone Number: ${sorrPhone}\nCaller's Email: ${sorrEmail}\n\nSummary: ${sorrSum}\nCompanyID: ${sorrCN}\nStoreID: ${sorrSN}\nAloha Key (CMCID): ${sorrCMCID}\n\nDiscrepancy Started on: ${sorrDisFrom} (yyyy-mm-dd)\nDiscrepancy Ended on: ${sorrDisTo} (yyyy-mm-dd)\nMissing Amount Reported: ${sorrAmt}\n\nAdditional Notes for SORR Department:\n\n${sorrNote}`,
  );
  tempCopyNotification.style.display = "block";
  setTimeout(() => {
    tempCopyNotification.style.display = "none";
  }, 500);
};

sorrCopyButton.addEventListener("click", sorrCopy);

// SORR CLEAR BUTTON

const sorrClearButton = document.querySelector("#sorr-clear");

const sorrClear = function () {
  if (confirm("Are you sure you want to clear the form fields?")) {
    const sorrName = (document.querySelector("#sorr-input-0").value = "");
    const sorrPhone = (document.querySelector("#sorr-input-1").value = "");
    const sorrEmail = (document.querySelector("#sorr-input-2").value = "");
    const sorrCN = (document.querySelector("#sorr-input-3").value = "");
    const sorrSN = (document.querySelector("#sorr-input-4").value = "");
    const sorrCMCID = (document.querySelector("#sorr-input-5").value = "");
    const sorrSum = (document.querySelector("#sorr-input-6").selectedIndex = 0);
    const sorrDisFrom = (document.querySelector("#sorr-input-7").value = "");
    const sorrDisTo = (document.querySelector("#sorr-input-8").value = "");
    const sorrAmt = (document.querySelector("#sorr-input-9").value = "");
    const sorrNote = (document.querySelector("#sorr-input-10").value = "");
  }
};

sorrClearButton.addEventListener("click", sorrClear);

// PDR Windows Shell/Run Command Copy to clipboard function

const sorrPdrButton = document.querySelector("#sorr-notif-copy-2");

const sorrPdr = function () {
  const textToCopy = "%iberdir%\\bin\\rpt.exe /ry";
  navigator.clipboard.writeText(textToCopy);
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 500);
};

sorrPdrButton.addEventListener("click", sorrPdr);

// DC1 Location Copy to Clipboard function

const sorrDCButton = document.querySelector("#sorr-notif-copy-1");

const sorrDC = function () {
  const textToCopy = "\\\\10.1.33.205\\d\\Level 2 Offline Files";
  navigator.clipboard.writeText(textToCopy);
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 500);
};

sorrDCButton.addEventListener("click", sorrDC);

// PDR and Reports OKM Fast Travel Button Function

const sorrOKMButton = document.querySelector("#sorr-guide-0");

const sorrOKM = function () {
  window.open(
    "https://ncrvoyix.sharepoint.com/:w:/r/sites/NCR_Payments_BL/_layouts/15/doc2.aspx?action=edit&sourcedoc=%7Bd9b68f76-a7f6-4b02-8564-ca8fc1078b1c%7D&wdExp=TEAMS-TREATMENT&web=1&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNjEwMDIxMjAxOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D",
    "_blank",
  );
};

sorrOKMButton.addEventListener("click", sorrOKM);

// Resubmission Sheet Download File on SP

const sorrPDRButton = document.querySelector("#sorr-guide-1");

const sorrPDR = function () {
  showInternalResourceNotice();
};

sorrPDRButton.addEventListener("click", sorrPDR);
