const templateBtn = document.getElementById("template-btn");
const gkBtn = document.getElementById("gk-btn");
// const onBtn = document.getElementById("on-btn");
const cmdBtn = document.getElementById("cmd-btn");
const ptosBtn = document.getElementById("ptos-btn");
const nppBtn = document.getElementById("npp-btn");
const sorrBtn = document.getElementById("sorr-btn");

function showInternalResourceNotice() {
  window.alert("This internal company resource is not included in the public version.");
}

// TEMPLATE SECTION WHICH IS OPENED BY DEFAULT display:block

templateBtn.addEventListener("click", function () {
  document
    .querySelectorAll("section")
    .forEach((item) => (item.style.display = "none"));
  document.querySelector("#section-0").style.display = "block";
});

// GK TEMPLATE WHICH OPENS UPON CLICK

gkBtn.addEventListener("click", function () {
  document
    .querySelectorAll("section")
    .forEach((item) => (item.style.display = "none"));
  document.querySelector("#section-1").style.display = "block";
  document.querySelector(".gk-section").classList.remove("hidden");
});

// OVERNIGHT TEMPLATE WHICH OPENS UPON CLICK [OLD REDACTED]

// onBtn.addEventListener("click", function () {
//   document
//     .querySelectorAll("section")
//     .forEach((item) => (item.style.display = "none"));
//   document.querySelector("#section-4").style.display = "block";
//   document.querySelector(".on-section").classList.remove("hidden");
// });

// COMMANDS TEMPLATE WHICH OPENS UPON CLICK

cmdBtn.addEventListener("click", function () {
  document
    .querySelectorAll("section")
    .forEach((item) => (item.style.display = "none"));
  document.querySelector("#section-2").style.display = "block";
  document.querySelector(".cmd-section").classList.remove("hidden");
});

// JETPAY TEMPLATE WHICH OPENS UPON CLICK

nppBtn.addEventListener("click", function () {
  document
    .querySelectorAll("section")
    .forEach((item) => (item.style.display = "none"));
  document.querySelector("#section-6").style.display = "block";
  document.querySelector(".rma-section").classList.remove("hidden");
});

// PTO TEMPLATE WHICH OPENS UPON CLICK

ptosBtn.addEventListener("click", function () {
  document
    .querySelectorAll("section")
    .forEach((item) => (item.style.display = "none"));
  document.querySelector("#section-7").style.display = "block";
  document.querySelector(".pto-section").classList.remove("hidden");
});

// SORR TEMPLATE WHICH OPENS UPON CLICK

sorrBtn.addEventListener("click", function () {
  document
    .querySelectorAll("section")
    .forEach((item) => (item.style.display = "none"));
  document.querySelector("#section-9").style.display = "block";
  document.querySelector(".sorr-section").classList.remove("hidden");
});

// Overnight payments button window

const on2Button = document.querySelector("#on2-btn");

const on2Link = function () {
  showInternalResourceNotice();
};

on2Button.addEventListener("click", on2Link);
