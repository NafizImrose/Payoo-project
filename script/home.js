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

//Machine ***************************************************************************
function getPin(value) {
  const pin = document.getElementById(value);
  const pinNumber = pin.value;
  return pinNumber;
}

function inputAmount(value) {
  const amount = document.getElementById(value);
  const finalAmount = Number(amount.value);
  return finalAmount;
}

function currentBalance() {
  const balance = document.getElementById("balance");
  let Amount = Number(balance.innerText);
  return Amount;
}

function replaceBlance(value) {
  balance.innerText = value;
}

function GetValueOfInput(value) {
  const agent = document.getElementById(value);
  const finalNumber = agent.value;
  return finalNumber;
}
function showOnly(id) {
  const addMoney = document.getElementById("add-money-sec");
  const cashOut = document.getElementById("cashout-sec");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");

  const select = document.getElementById(id);
  select.classList.remove("hidden");
}
//Machine ******************************************************************************************

// cash-out ****************************************************************************************
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = GetValueInput("out-agent-number");

  const pinNumber = getPin("cash-out-pin");

  if (agentNumber.startsWith("01") && pinNumber == "1234") {
    const withdrawAmount = inputAmount("out-amount-number"); //.value o string and inner text to string e , Number() diye numaric krte hoy

    let balanceAmount = currentBalance(); // const diyechilam

    if (withdrawAmount > balanceAmount) {
      alert("Insuffient Balance");
    } else {
      balanceAmount = balanceAmount - withdrawAmount;
      replaceBlance(balanceAmount);
    }
  } else {
    alert("Invalid pin or agent number");
  }
});
// cash-out-end ****************************************************************************************

// Add-Money-start ***************************************************************************************
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

document.getElementById("add-btn").addEventListener("click", function () {
  const agent = GetValueOfInput("banc-name");
  if (agent == "Select A Bank") {
    alert("Please select a bank");
    return;
  }
  const bancAccNum = GetValueOfInput("add-agent-number");
  if (bancAccNum.length < 11) {
    alert("Invalid Account Number");
    return;
  }
  if (getPin("add-pin") == "1234") {
    let balance = currentBalance();
    const inputBalance = inputAmount("add-amount-number");

    balance += inputBalance;
    replaceBlance(balance);
  } else {
    alert("Invalid Pin Number");
  }
});
// Add-Money-end ***************************************************************************************
