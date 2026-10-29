// NEW TICKET TEMPLATE

const gkNewButton = document.querySelector("#gk-new");

const gkNew = function () {
  const gkTicket = document.querySelector("#gk-field").value || "N/A";

  navigator.clipboard.writeText(
    `Dear Customer,\n\nThank you for bringing this matter to our attention. We would like to inform you that a ticket has been generated for your incident, and a NCR Payments Gateway Support Agent will be assigned to it.\n\nTicket Number: ${gkTicket}\n\nIf you have any further questions or concerns, please do not hesitate to contact us. We appreciate your patience and understanding in this matter.`
  );
  gkNotification.style.display = "block";
  setTimeout(() => {
    gkNotification.style.display = "none";
  }, 600);
};
gkNewButton.addEventListener("click", gkNew);

// UPDATE TEMPLATE

const gkUpdateButton = document.querySelector("#gk-update");

const gkUpdate = function () {
  navigator.clipboard.writeText(
    `Dear Customer,\n\nThank you for bringing this matter to our attention. We would like to inform you that we have received your request and have updated the ticket with your information.\n\nOur team will now work to address your request as quickly as possible, and we will keep you updated on any progress. If you have any further questions or concerns, please do not hesitate to contact us. You can reach us by phone at 800-433-0355.\n\nWe appreciate your patience and understanding in this matter!`
  );
  gkUpdateNotification.style.display = "block";
  setTimeout(() => {
    gkUpdateNotification.style.display = "none";
  }, 600);
};
gkUpdateButton.addEventListener("click", gkUpdate);

// CUSTOMER TEMPLATE TEMPLATE

const rmaDispatchButton = document.querySelector("#gk-rma");

const rmaDispatch = function () {
  navigator.clipboard.writeText(
    `Dear Customer,\n\nWe are writing to inform you that your case has been assigned to the NCR SMB Services Shared Implementation team. We have diligently processed your replacement request in accordance with your contracted services level. As per our procedure, a return label has been included beneath the original. It is imperative that you return the defective unit to NCR to avoid any potential additional fees.\n\nShould you require any assistance during the installation of your replacement hardware, our dedicated helpdesk is available to provide support. You may reach our helpdesk by dialing 800-433-0355.\nWe value your business and strive to ensure your utmost satisfaction with our services. If you have any further inquiries or concerns, please do not hesitate to contact us.\n\nThank you for choosing NCR.`
  );
  gkTemplateNotification.style.display = "block";
  setTimeout(() => {
    gkTemplateNotification.style.display = "none";
  }, 600);
};
rmaDispatchButton.addEventListener("click", rmaDispatch);

// CLEAR BUTTON

const gkClearButton = document.querySelector("#gk-clear");

const gkClear = function () {
  const gkTicket = (document.querySelector("#gk-field").value = "");
};
gkClearButton.addEventListener("click", gkClear);
