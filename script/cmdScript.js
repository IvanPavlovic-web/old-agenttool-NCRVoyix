const commands = new Map([
  [0, 'schtasks /Run /TN "CP Settle"'],
  [1, "arp -a"],
  [2, "netsh interface ip delete arpcache"],
  [3, "ipconfig /flushdns"],
  [4, "net stats srv"],
  [5, "ipconfig /all"],
  [6, "netsh advfirewall show allprofiles"],
  [
    8,
    "REG QUERY HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\ /v EnableLUA",
  ],
  [10, "reg query hklm\\software\\mtxeps\\openepsnet\\00"],
  [11, 'setx EDCPath "C:\\CONNECTEDPAYMENTS" /m'],
  [12, "reg query HKLM\\HARDWARE\\DEVICEMAP\\SERIALCOMM"],
  [
    13,
    "reg query hklm\\software\\microsoft\\windows\\currentversion\\policies\\system",
  ],
  [15, "route delete 0.0.0.0"],
  [16, 'setx EDCPath "" /m'],
  [
    19,
    "C:\\Windows\\SysNative\\WindowsPowerShell\\v1.0\\powershell.exe Get-MpPreference",
  ],
]);

// Copy the selected command using one shared click handler.
const buttons = document.querySelectorAll(".cmd-button");
const notification = document.getElementById("notification");
// Adding Event listener to all of the Buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Gathering the Id of the button
    const id = button.id;
    // Extracting the value from the Map by using the Id
    const command = commands.get(parseInt(id.split("-")[1]));

    // Copying the clicked value to the CLIPBOARD
    navigator.clipboard.writeText(command);

    // CSS Style for the notification window can be found in
    // general.css at the very bottom
    // notification.textContent = `Command "${command}" copied to clipboard`;
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 500);
  });
});
