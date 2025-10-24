// Authentication System Toggle (Set to true to enable, false to disable)
const isAuthenticationEnabled = false;
const customPasscode = "67"; // Change this to your desired passcode

if (isAuthenticationEnabled) {
  document.getElementById('entry-card').classList.add('auth-enabled');
  document.getElementById('main-website').style.display = 'none';
} else {
  document.getElementById('entry-card').style.display = 'none';
  document.getElementById('main-website').style.display = 'block';
}

function validateEntry() {
  const pass = document.getElementById('userpass').value.trim();
  if (pass === customPasscode) {
    document.getElementById('entry-card').style.display = 'none';
    document.getElementById('main-website').style.display = 'block';
  } else {
    alert("Incorrect passcode. Try again.");
  }
}

function toggleSection(id) {
  const table = document.getElementById(id);
  table.style.display = table.style.display === 'block' ? 'none' : 'block';
}
