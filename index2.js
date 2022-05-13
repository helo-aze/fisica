const celciusInput = document.getElementById("celcius");
const kelvinInput = document.getElementById("kelvin");
const conv = document.getElementsByClassName("input");

for (let i = 0; i < conv.length; i++) {
  let input = conv[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius":
        kelvinInput.value = value + 273;
        break;

      case "kelvin":
        celciusInput.value = value - 273;
        break;
    }
  });
}
