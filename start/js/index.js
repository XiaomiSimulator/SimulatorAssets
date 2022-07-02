window.onload = function () {
  document.getElementById("button").style.display = "block";
  document.getElementById("button").addEventListener("click", function () {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
    }
    window.location.replace("https://XiaomiSimulator.github.io/boot.html");
  });
};
