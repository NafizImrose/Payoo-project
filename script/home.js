document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.replace("/index.html");
});

let flag = false;
document.getElementById("add-money").addEventListener("click", function () {
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
