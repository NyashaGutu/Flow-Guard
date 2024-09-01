console.log("FlowGuard Prototype Loaded");

// Function to generate random data within a specified range
function getRandomValue(min, max, decimalPlaces = 1) {
    const value = (Math.random() * (max - min) + min).toFixed(decimalPlaces);
    return parseFloat(value);
}

// Function to update the sensor data
function updateSensorData() {
    const phLevel = document.getElementById('ph-level');
    const turbidity = document.getElementById('turbidity');
    const dissolvedOxygen = document.getElementById('dissolved-oxygen');

    // Simulate new random values
    phLevel.textContent = getRandomValue(6.5, 8.5);
    turbidity.textContent = `${getRandomValue(0.5, 2.0)} NTU`;
    dissolvedOxygen.textContent = `${getRandomValue(7, 10)} mg/L`;
}

// Set interval to update the data every 5 seconds (5000 ms)
setInterval(updateSensorData, 5000);
