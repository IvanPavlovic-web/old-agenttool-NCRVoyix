function updateTimes() {
  const timezone = document.getElementById("timezone").value;
  const dateInput = document.getElementById("date").value;
  const timeInput = document.getElementById("time").value;
  const datetime = new Date(`${dateInput}T${timeInput}:00`);

  let belgradeTime = new Date(
    datetime.toLocaleString("en-US", { timeZone: "Europe/Belgrade" })
  );
  // MOUNTAIN TIME FOR BELGRADE CONVERSION
  if (timezone === "MT") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const mtOffset = -7; // Mountain Time (MT) offset from UTC
    const hourDiff = belgradeOffset - mtOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
    // EASTERN TIME FOR BELGRADE CONVERSION
  } else if (timezone === "ET") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const etOffset = -5; // Eastern Time (ET) offset from UTC
    const hourDiff = belgradeOffset - etOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
    // CENTRAL TIME FOR BELGRADE CONVERSION
  } else if (timezone === "CT") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const ctOffset = -6; // Central Time (CT) offset from UTC
    const hourDiff = belgradeOffset - ctOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
    // PACIFIC TIME FOR BELGRADE CONVERSION
  } else if (timezone === "PT") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const ptOffset = -8; // Pacific Time (PT) offset from UTC
    const hourDiff = belgradeOffset - ptOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
    // HAWAII TIME FOR BELGRADE CONVERSION
  } else if (timezone === "HT") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const htOffset = -10; // Hawaii Time (HT) offset from UTC
    const hourDiff = belgradeOffset - htOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
    // ALASKA TIME FOR BELGRADE CONVERSION
  } else if (timezone === "AKT") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const aktOffset = -9; // Alaska Time (AKTT) offset from UTC
    const hourDiff = belgradeOffset - aktOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
    // ATLANTIC TIME FOR BELGRADE CONVERSION
  } else if (timezone === "AT") {
    const belgradeOffset = -1 * (new Date().getTimezoneOffset() / 60); // get Belgrade's offset from UTC
    const atOffset = -4; // Atlantic Time (AT) offset from UTC
    const hourDiff = belgradeOffset - atOffset; // difference between time zone offsets
    const belgradeHours = belgradeTime.getHours() + hourDiff;
    if (belgradeHours < 0) {
      belgradeTime.setDate(belgradeTime.getDate() - 1);
      belgradeTime.setHours(24 + belgradeHours);
    } else if (belgradeHours >= 24) {
      belgradeTime.setDate(belgradeTime.getDate() + 1);
      belgradeTime.setHours(belgradeHours - 24);
    } else {
      belgradeTime.setHours(belgradeHours);
    }
  }

  // CENTRAL TIME CONVERSION
  let centralTime = new Date(
    datetime.toLocaleString("en-US", { timeZone: "America/Chicago" })
  );
  if (timezone === "MT") {
    centralTime.setHours(centralTime.getHours() + 8);
  } else if (timezone === "ET") {
    centralTime.setHours(centralTime.getHours() + 6);
  } else if (timezone === "CT") {
    centralTime.setHours(centralTime.getHours() + 7);
  } else if (timezone === "PT") {
    centralTime.setHours(centralTime.getHours() + 9);
  } else if (timezone === "HT") {
    centralTime.setHours(centralTime.getHours() + 11);
  } else if (timezone === "AKT") {
    centralTime.setHours(centralTime.getHours() + 10);
  } else if (timezone === "AT") {
    centralTime.setHours(centralTime.getHours() + 5);
  }

  let results = "";
  results += `<div class="tmz-result">Banja Luka Time: ${belgradeTime.toLocaleString()}</div>`;
  results += `<div class="tmz-result">Central Time: ${centralTime.toLocaleString()}</div>`;

  document.getElementById("results").innerHTML = results;
}

const select = document.getElementById("timezone");
select.addEventListener("change", updateTimes);

const dateInput = document.getElementById("date");
dateInput.addEventListener("input", updateTimes);

const timeInput = document.getElementById("time");
timeInput.addEventListener("input", updateTimes);
