// 🔁 ThingSpeak details
const channelID = "3246249";
const readAPI = "BD9FOOOBWVYGOKJI";

// 🔄 Fetch data from ThingSpeak
function updateFromCloud() {
  fetch(`https://api.thingspeak.com/channels/${3246249}/feeds/last.json?api_key=${BD9FOOOBWVYGOKJI}`)
    .then(response => response.json())
    .then(data => {
      // Moisture
      const moisture = data.field1;
      document.getElementById("moisture").innerText = moisture + "%";

      // Pump status
      const pump = data.field2;
      document.getElementById("pump").innerText = pump == 1 ? "ON" : "OFF";
    })
    .catch(error => {
      console.log("Error fetching data:", error);
    });
}

// ⏱️ Update every 20 seconds
setInterval(updateFromCloud, 20000);

// Initial call
updateFromCloud();
