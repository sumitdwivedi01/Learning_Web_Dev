document.title="Random Color program using js";
let color1 = Math.random();
let box_id = document.getElementsByClassName("box");
function choose_background_color(number, index) {
  if (number < 0.2) {
    box_id[index].style.backgroundColor = "red";
  } else if (number >= 0.2 && number < 0.4) {
    box_id[index].style.backgroundColor = "blue";
  } else if (number >= 0.4 && number < 0.6) {
    box_id[index].style.backgroundColor = "green";
  } else if (number >= 0.6 && number < 0.8) {
    box_id[index].style.backgroundColor = "aqua";
  } else {
    box_id[index].style.backgroundColor = "grey";
  }
}
function choose_color(number, index) {
  if (number < 0.2) {
    box_id[index].style.color = "purple";
  } else if (number >= 0.2 && number < 0.4) {
    box_id[index].style.color = "";
  } else if (number >= 0.4 && number < 0.6) {
    box_id[index].style.color = "black";
  } else if (number >= 0.6 && number < 0.8) {
    box_id[index].style.color = "brown";
  } else {
    box_id[index].style.color = "white";
  }
}
choose_background_color(color1, 0);
color1 = Math.random();
choose_color(color1, 0);
color1 = Math.random();
choose_background_color(color1, 1);
color1 = Math.random();
choose_color(color1, 1);
color1 = Math.random();
choose_background_color(color1, 2);
color1 = Math.random();
choose_color(color1, 2);
color1 = Math.random();
choose_background_color(color1, 3);
color1 = Math.random();
choose_color(color1, 3);
color1 = Math.random();
choose_background_color(color1, 4);
color1 = Math.random();
choose_color(color1, 4);
