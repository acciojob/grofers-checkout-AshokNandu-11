const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class 'price'
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

 
  priceElements.forEach((element) => {
    total += parseFloat(element.textContent);
  });

  const existingTotalRow = document.getElementById("total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }


  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);

  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
