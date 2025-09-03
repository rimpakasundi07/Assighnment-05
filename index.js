let count = 0;
const heartCount = document.getElementById("heart-count");
const heartbtn = document.querySelectorAll(".fa-heart");

heartbtn.forEach((button) => {
  button.addEventListener("click", function () {
    count++;
    heartCount.innerText = count;
  });
});
