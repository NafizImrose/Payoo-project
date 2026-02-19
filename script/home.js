document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.replace("/index.html");
});

// cashout
// let flag = false;
// const btn = document.getElementById("cash-out");
// const cashOut = document.getElementById("cashout-sec");

// btn.addEventListener("click", function () {
//   if (!flag) {
//     // cashOut.style.display = "block";
//     cashOut.classList.remove("hidden");
//     flag = true;
//   } else {
//     cashOut.classList.add("hidden");
//     flag = false;
//   }
// });

// btn.addEventListener("focus", function () {
//   cashOut.classList.remove("hidden");
// });
// btn.addEventListener("blur", function () {
//   cashOut.classList.add("hidden");
// });

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agent = document.getElementById("agent-number");
  const agentNumber = agent.value;

  const pin = document.getElementById("pin");
  const pinNumber = pin.value;

  if (agentNumber.startsWith("01") && pinNumber == "1234") {
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
  } else {
    alert("Invalid pin or agent number");
  }
});

// Add-Money
// let flag1 = false;
// const addBtn = document.getElementById("add-money");
// const addMoney = document.getElementById("add-money-sec");

// addBtn.addEventListener("click", function () {
//   if (!flag1) {
//     // cashOut.style.display = "block";
//     addMoney.classList.remove("hidden");
//     flag1 = true;
//   } else {
//     addMoney.classList.add("hidden");
//     flag1 = false;
//   }
// });

// addBtn.addEventListener("focus", function () {
//   addMoney.classList.remove("hidden");
// });
// addBtn.addEventListener("blur", function () {
//   addMoney.classList.add("hidden");
// });
