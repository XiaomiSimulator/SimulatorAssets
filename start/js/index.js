window.onload = function () {
  document.getElementsByClassName("start")[0].style.display = "block";
  document
    .getElementsByClassName("start")[0]
    .addEventListener("click", function () {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
      } else if (document.body.webkitRequestFullscreen) {
        document.body.webkitRequestFullscreen();
      }
      document.body.innerHTML =
        "<iframe src='https://XiaomiSimulator.github.io/sys/boot.html'></iframe>";
    });
};
