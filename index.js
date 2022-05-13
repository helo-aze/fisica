const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");

const conv = document.getElementsByClassName("input");

for (let i = 0; i < conv.length; i++) {
  let input = conv[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = value * 1.8 + 32;
        break;
      case "fahrenheit":
        celciusInput.value = (value - 32) / 1.8;
        break;
    }
  });
}
