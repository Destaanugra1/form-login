document.getElementById("button").onclick = handleClick;

function handleClick() {
  alert("Hello, world!");
}

document.getElementById("humberger").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default action of the link
  document.querySelector(".nav").classList.toggle("active");
});
