window.onload = function () {
  document.body.style.backgroundImage = `url("https://xiaomisimulator.github.io/SimulatorAssets/images/wallpapers/${
    Math.floor(Math.random() * 22) + 1
  }.jpg")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var day_of_the_week = date.getDay();
  day_of_the_week =
    day_of_the_week == 0
      ? "Sunday"
      : day_of_the_week == 1
      ? "Monday"
      : day_of_the_week == 2
      ? "Tuesday"
      : day_of_the_week == 3
      ? "Wednesday"
      : day_of_the_week == 4
      ? "Thursday"
      : day_of_the_week == 5
      ? "Friday"
      : "Saturday";
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  var time = hours + ":" + minutes;
  document.getElementsByClassName("clock_text")[0].innerHTML = time;
  document.getElementsByClassName(
    "date_text"
  )[0].innerHTML = `${day}/${month} ${day_of_the_week}`;
  setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var day_of_the_week = date.getDay();
    day_of_the_week =
      day_of_the_week == 0
        ? "Sunday"
        : day_of_the_week == 1
        ? "Monday"
        : day_of_the_week == 2
        ? "Tuesday"
        : day_of_the_week == 3
        ? "Wednesday"
        : day_of_the_week == 4
        ? "Thursday"
        : day_of_the_week == 5
        ? "Friday"
        : "Saturday";
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var time = hours + ":" + minutes;
    document.getElementsByClassName("clock_text")[0].innerHTML = time;
    document.getElementsByClassName(
      "date_text"
    )[0].innerHTML = `${day}/${month} ${day_of_the_week}`;
  }, 1000);
};
