
days = 0;
function addDay() {
  document.g;
  const good = document.getElementById("good-gif");
  good.classList.remove("good-gif");
  setTimeout(function() {
    good.classList.add("good-gif");
  }, 3000);
}

function reset() {

  const bad = document.getElementById("bad-gif");
  bad.classList.remove("bad-gif");
  setTimeout(function() {
    bad.classList.add("bad-gif");
  }, 3000);
} 