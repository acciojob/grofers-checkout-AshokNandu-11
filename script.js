const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class 'price'
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Calculate total from all price values
  priceElements.forEach((element) => {
    const price = parseFloat(element.textContent);
    if (!isNaN(price)) { // Check if the price is a valid number
      total += price;
    }
  });

  // Check if total row already exists to avoid duplicates
  const existingTotalRow = document.getElementById("total-row");
  if (existingTotalRow) {
    existingTotalRow.remove(); // Remove old total row if present
  }

  // Create a new row and cell
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row"; // ID to prevent duplicate rows

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);

  // Append the row to the existing table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
