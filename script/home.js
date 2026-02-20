document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.replace("index.html");
});

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
  const balance = document.getElementById("balance");
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
  const history = document.getElementById("history-section");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  history.classList.add("hidden");

  const select = document.getElementById(id);
  select.classList.remove("hidden");
}
//Machine ******************************************************************************************

// cash-out ****************************************************************************************
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = GetValueOfInput("out-agent-number");

  const pinNumber = getPin("cash-out-pin");

  if (agentNumber.startsWith("01") && pinNumber == "1234") {
    const withdrawAmount = inputAmount("out-amount-number"); //.value o string and inner text to string e , Number() diye numaric krte hoy

    let balanceAmount = currentBalance(); // const diyechilam

    if (withdrawAmount > balanceAmount) {
      alert("Insuffient Balance");
    } else {
      balanceAmount = balanceAmount - withdrawAmount;
      replaceBlance(balanceAmount);
      //add transaction

      const card = document.createElement("div");
      card.innerHTML = `
      <div  class="flex justify-between items-center bg-base-100 rounded-2xl p-2 pl-6">
            <div class="flex gap-4 items-center p-0">
                <div class="flex justify-center items-center rounded-full bg-gray-200 w-10 h-10 p-0"><img src="assets/opt-1.png" alt=""></div>
                <div>
                    <h2 class="font-bold">Cash Out : $ ${withdrawAmount} </h2>
                    ${new Date()}
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

        </div>
      `;
      const history = document.getElementById("history-list");
      history.append(card);
    }
  } else {
    alert("Invalid pin or agent number");
  }
});
// cash-out-end ****************************************************************************************

// Add-Money-start ***************************************************************************************

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
    //add history

    const card = document.createElement("div");
    card.innerHTML = `
      <div  class="flex justify-between items-center bg-base-100 rounded-2xl p-2 pl-6">
            <div class="flex gap-4 items-center p-0">
                <div class="flex justify-center items-center rounded-full bg-gray-200 w-10 h-10 p-0"><img src="assets/opt-1.png" alt=""></div>
                <div>
                    <h2 class="font-bold">Add Money : $ ${inputBalance} </h2>
                    ${new Date()}
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

        </div>
      `;
    const history = document.getElementById("history-list");
    history.append(card);
  } else {
    alert("Invalid Pin Number");
  }
});
// Add-Money-end ***************************************************************************************
