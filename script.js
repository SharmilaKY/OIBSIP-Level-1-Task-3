document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
  const tempInput = document.getElementById('temperature').value;
  const unit = document.getElementById('unit').value;
  const result = document.getElementById('result');

  if (tempInput === '' || isNaN(tempInput)) {
    result.innerHTML = "⚠️ Please enter a valid number!";
    result.style.color = "red";
    return;
  }

  const temp = parseFloat(tempInput);
  let celsius, fahrenheit, kelvin;

  // Conversion logic
  if (unit === 'celsius') {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === 'fahrenheit') {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (unit === 'kelvin') {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = temp;
  }

  // Display results neatly
  result.style.color = "#000";
  result.innerHTML = `
    🌡️ <strong>Input:</strong> ${temp} ${unit.charAt(0).toUpperCase() + unit.slice(1)}<br>
    🔹 <strong>Celsius:</strong> ${celsius.toFixed(2)} °C<br>
    🔹 <strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F<br>
    🔹 <strong>Kelvin:</strong> ${kelvin.toFixed(2)} K
  `;
}
