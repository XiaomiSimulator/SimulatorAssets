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
      window.location.replace("https://XiaomiSimulator.github.io/boot.html");
    });
};
