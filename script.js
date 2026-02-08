let pumpOn = false;
let moisture = 50;
let autoMode = true;

function togglePump() {
  if (!autoMode) {
    pumpOn = !pumpOn;
    updatePumpUI();
  }
}

function toggleMode() {
  autoMode = !autoMode;
  document.getElementById("mode").innerText = autoMode ? "AUTO" : "MANUAL";
}

function updatePumpUI() {
  document.getElementById("pump").innerText = pumpOn ? "ON" : "OFF";
}

function updateMoisture() {
  moisture = Math.floor(Math.random() * 100);
  document.getElementById("moisture").innerText = moisture + "%";

  if (autoMode) {
    if (moisture < 30) {
      pumpOn = true;
    } else {
      pumpOn = false;
    }
    updatePumpUI();
  }
}

setInterval(updateMoisture, 2000);