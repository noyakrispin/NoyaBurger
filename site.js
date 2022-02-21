let totalPrice = 10;
let totalItems = 0;
const maxItems = 5;

function plus(idName, className, plusButtonId, minusButtonId, price) {
  const toAdd = document.getElementById(idName);
  const ourDiv = document.createElement("div");
  if (toAdd.childNodes.length !== maxItems) {
    ourDiv.classList.add(className);
    toAdd.appendChild(ourDiv);
    totalPrice += price;
    totalItems += 1;
    updatePrice();
    if (toAdd.childNodes.length !== 0) {
      updateButton(minusButtonId, false);
      if (toAdd.childNodes.length === maxItems) {
        updateButton(plusButtonId, true);
      }
    }
  } else {
    updateButton(plusButtonId, true);
  }
}

function minus(idName, className, plusButtonId, minusButtonId, price) {
  const ourDiv = document.getElementById(idName);
  if (ourDiv.childNodes.length === 0) {
    updateButton(minusButtonId, true);
  } else {
    const toRemove = document.getElementsByClassName(className)[0];
    ourDiv.removeChild(toRemove);
    totalPrice -= price;
    updatePrice();
    if (ourDiv.childNodes.length === 0) {
      updateButton(minusButtonId, true);
    }
    updateButton(plusButtonId, false);
  }
}

function updatePrice() {
  const price = document.getElementById("price");
  price.innerHTML = totalPrice;
}

function updateButton(buttonId, flag){
  document.getElementById(buttonId).disabled = flag;
}
