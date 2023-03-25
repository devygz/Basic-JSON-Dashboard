// CUSTOMIZABLE VALUES
const RefreshRate = 2; // get new data (X) times in 1 second. Similar to Hertz.
const APIEndpoint = "http://127.0.0.1:8078/api.json"; // If https, use https protocol directly to avoid possible 30X redirects (which results in increased latency)
//

let rrMS = 1000 / RefreshRate;


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function htmlNewSensorData(title, value) {
    return ` <div class="sensor-obj">
    <div class="sensor-value">${value}</div>
    <div class="sensor-tag">${title}</div>
</div>
`;
}

function updateSensorValues() {
    document.querySelector('.sensor-data').innerHTML = "";
    let apiData = JSON.parse(httpGet(APIEndpoint));
    let allKeys = Object.keys(apiData);
    let appendTable = "";
    allKeys.forEach(element => {
        let value = apiData[element];
        if(element != "speed" && element != "uptime"){
            appendTable += htmlNewSensorData(element, value);
        }else if(element == "uptime"){
            document.querySelector('.uptime').textContent = value;
        }else{
            document.querySelector('.speed-value').textContent = value.toFixed(0);
        }
    });
    document.querySelector('.sensor-data').innerHTML = appendTable;

    // time date
    let currentTimeString = `${+ new Date().getHours()}:${+ new Date().getMinutes()}`
    let currentDateString = `${new Date().toLocaleDateString()}`;
    document.querySelector('.time').textContent = currentTimeString;
    document.querySelector('.date').textContent = currentDateString;
    
}

setInterval(() => {
    updateSensorValues();
}, rrMS);

updateSensorValues();