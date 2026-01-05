let c = 0,
  ci = 0,
  cd = 0;

const count = document.getElementById("count");
const incCount = document.getElementById("inc-count");
const decCount = document.getElementById("dec-count");

function inc() {
  count.innerText = ++c;
  incCount.innerText = ++ci;
}

function dec() {
  count.innerText = --c;
  decCount.innerText = ++cd;
}

function reset() {
  count.innerText = c = 0;
  incCount.innerText = ci = 0;
  decCount.innerText = cd = 0;
}
