// Heart Icons clicked

let count = 0;
const heartCount = document.getElementById("heart-count");
const heartbtn = document.querySelectorAll(".fa-heart");

heartbtn.forEach((button) => {
  button.addEventListener("click", function () {
    count++;
    heartCount.innerText = count;
  });
});

// Call Buttons

let coins = 100;
const coinBtn = document.getElementById("coin-btn");
const callBtn = document.querySelectorAll(".call-btn");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clear-btn");

callBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".service-number").textContent;

    if (coins < 20) {
      alert("Not enough coins! You need atleast 20 coins.");
      return;
    }
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    coins -= 20;
    coinBtn.innerText = coins;
    historyList.innerHTML += `<li class="p-4 bg-gray-100 rounded-2xl font-semibold text-lg m-4 text-black"> ${serviceName}- ${serviceNumber}</li>`;
  });
});

clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
