let bt = document.getElementById("btn");

btn.addEventListener("click", start);
function start() {
  document.getElementById("start").innerHTML = "Sync started";
  setTimeout(() => {
    document.getElementById("async").innerHTML = "Done Finished wait";
  }, 5000);
  document.getElementById("end").textContent = "sync Ended successfully";
}
