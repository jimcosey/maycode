var span = 0;
function toggle() {
  if (span == 0) {
    document.getElementById("arrow").style.transform = "rotate(-180deg)";
    document.getElementById("arrow").style.color = "#f34335";
    document.getElementById("menu-slide").style.bottom = "-100%";

    span = 1;
  } else {
    document.getElementById("arrow").style.transform = "rotate(0deg)";
    document.getElementById("arrow").style.color = "#000";
    document.getElementById("menu-slide").style.bottom = "0";
    span = 0;
  }
}
