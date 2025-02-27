let input = document.getElementById("ip");
let output = document.getElementById("output");

function display() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let value = Number(input.value); // Convert input to number
      output.innerText = `Result: ${value}`;
      resolve(value);
    }, 1500); // Reduced from 2000 to 1500
  });
}

function Multiply(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      value = value * 2;
      output.innerText = `Result: ${value}`;
      resolve(value);
    }, 1500); // Reduced from 2000 to 1500
  });
}

function Subtract(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      value = value - 3;
      output.innerText = `Result: ${value}`;
      resolve(value);
    }, 800); // Reduced from 1000 to 800
  });
}

function Divide(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      value = value / 2;
      output.innerText = `Result: ${value}`;
      resolve(value);
    }, 800); // Reduced from 1000 to 800
  });
}

function result(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      value = value + 10; // Add 10 in the final step
      output.innerText = `Final Result: ${value}`; // Label as Final Result
      resolve(value);
    }, 800); // Reduced from 1000 to 800
  });
}

document.getElementById("btn").addEventListener("click", () => {
  display()
    .then((value) => Multiply(value))
    .then((value) => Subtract(value))
    .then((value) => Divide(value))
    .then((value) => result(value))
    .catch((err) => {
      output.innerText = `Error: ${err}`;
    });
});
