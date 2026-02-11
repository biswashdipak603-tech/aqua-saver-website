const channelID = "3246249";
const readAPI = "BD9FOOOBWVYGOKJI";

function updateFromCloud() {
  fetch(`https://api.thingspeak.com/channels/${channelID}/feeds/last.json?api_key=${readAPI}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // 👈 IMPORTANT

      if (data.field1 !== null) {
        document.getElementById("moisture").innerText = data.field1 + "%";
      }

      if (data.field2 !== null) {
        document.getElementById("pump").innerText =
          data.field2 == "1" ? "ON" : "OFF";
      }
    })
    .catch(err => console.log("Fetch error:", err));
}

setInterval(updateFromCloud, 20000);
updateFromCloud();

const writeAPI = "IRDW9OJ518YH88GS";

function togglePumpManual() {
  let current = document.getElementById("pump").innerText;
  let newValue = current === "ON" ? 0 : 1;

  fetch(`https://api.thingspeak.com/update?api_key=${writeAPI}&field3=${newValue}`);
}


