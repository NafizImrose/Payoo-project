document.getElementById("input-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("number");
  const number = inputNumber.value;

  const inputPin = document.getElementById("pin");
  const pin = inputPin.value;

  const oldMsg = document.getElementById("error-msg");
  const oldPin = document.getElementById("error-pin");

  if (oldMsg) {
    oldMsg.remove();
  }
  if (oldPin) {
    oldPin.remove();
  }

  //   creating new element
  const button = document.getElementById("input-btn");
  if (number.trim() === "") {
    const msg = document.createElement("p");
    msg.innerText = "*** Please fill the Number section ***";
    msg.style.color = "red";
    button.before(msg);
    msg.id = "error-msg";
  }
  if (pin.trim() === "") {
    const pinn = document.createElement("p");
    pinn.innerText = "*** Please fill the Pin section ***";
    pinn.style.color = "red";
    button.before(pinn);
    pinn.id = "error-pin";
  }

  if (number === "01741216586" && pin === "1234") {
    alert("Successfully loged in...Welcome");
    // window.location.replace("home.html");
    window.location.assign("home.html");
  } else {
    // alert("log in failed, try again");
    return;
  }
});
