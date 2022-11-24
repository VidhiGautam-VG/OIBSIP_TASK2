// =========== initialize===============
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
    
// ===========Convert Celcius to Farenhite or Kelvin===============
    celsius.oninput = function () {
        let f = (parseFloat(celsius.value) * 9) / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
 
        let k = (parseFloat(celsius.value) + 273.15);
            kelvin.value = parseFloat(k.toFixed(2));
    }
    
// ===========Convert Celcius to Farenhite or Kelvin===============
    fahrenheit.oninput = function () {
        let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
            celsius.value = parseFloat(c.toFixed(2));
 
        let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
            kelvin.value = parseFloat(k.toFixed(2));
    }
    
// ===========Convert Celcius to Farenhite or Kelvin===============
    kelvin.oninput = function () {
        let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
 
        let c = (parseFloat(kelvin.value) - 273.15);
            celsius.value = parseFloat(c.toFixed(2));
    }