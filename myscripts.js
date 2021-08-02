function changemenu(x) {
  x.classList.toggle("change");

  var y = document.getElementById("myLinks");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function changecard1(q) {
  q.classList.toggle("turn");

  var t = document.getElementById("project-context1");
  if (t.style.display === "block") {
    t.style.display = "none";
  } else {
    t.style.display = "block";
  } 
}

function changecard2(q) {
  q.classList.toggle("turn");

  var t = document.getElementById("project-context2");
  if (t.style.display === "block") {
    t.style.display = "none";
  } else {
    t.style.display = "block";
  } 
}

function changecard3(q) {
  q.classList.toggle("turn");

  var t = document.getElementById("project-context3");
  if (t.style.display === "block") {
    t.style.display = "none";
  } else {
    t.style.display = "block";
  } 
}

function changecard4(q) {
  q.classList.toggle("turn");

  var t = document.getElementById("project-context4");
  if (t.style.display === "block") {
    t.style.display = "none";
  } else {
    t.style.display = "block";
  } 
}

function darkFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}