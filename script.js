const channelID = "YOUR_CHANNEL_ID";
const readAPI = "YOUR_READ_API_KEY";

function updateFromCloud() {
  fetch(`https://api.thingspeak.com/channels/${channelID}/feeds/last.json?api_key=${readAPI}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("moisture").innerText =
        data.field1 + "%";

      document.getElementById("pump").innerText =
        data.field2 == 1 ? "ON" : "OFF";
    });
}

setInterval(updateFromCloud, 20000);
