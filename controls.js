const root = document.documentElement;
const sliders = document.querySelectorAll(".color-slider input[type='range']");

function grayscale(value) {
  return `rgb(${value}, ${value}, ${value})`;
}

function updateColor(event) {
  const slider = event.currentTarget;
  const cssVariable = slider.dataset.variable;
  const value = slider.value;

  root.style.setProperty(cssVariable, grayscale(value));
}

sliders.forEach((slider) => {
  updateColor({ currentTarget: slider });
  slider.addEventListener("input", updateColor);
});