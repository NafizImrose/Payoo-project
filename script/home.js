document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.replace("/index.html");
});

// cashout
let flag = false;
document.getElementById("cash-out").addEventListener("click", function () {
  const cashOut = document.getElementById("cashout-sec");
  if (!flag) {
    // cashOut.style.display = "block";
    cashOut.classList.remove("hidden");
    flag = true;
  } else {
    cashOut.classList.add("hidden");
    flag = false;
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agent = document.getElementById("agent-number");
  const agentNumber = agent.value;

  const pin = document.getElementById("pin");
  const pinNumber = pin.value;

  if (agentNumber == "01741216586" && pinNumber == "1234") {
    const amount = document.getElementById("amount-number");
    const withdrawAmount = Number(amount.value); //.value o string and inner text to string e , Number() diye numaric krte hoy

    const balance = document.getElementById("balance");
    let balanceAmount = Number(balance.innerText); // const diyechilam

    if (withdrawAmount > balanceAmount) {
      alert("Insuffient Balance");
    } else {
      balanceAmount = balanceAmount - withdrawAmount;
      balance.innerText = balanceAmount;
    }
  }
});
