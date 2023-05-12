window.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("#slideshow img");
  var currentImage = 0;
  
  function rotateImage() {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");
  }
  
   // Start the slideshow
   images[currentImage].classList.add("active");
  setInterval(rotateImage, 4000); // Change image every 4 seconds
});
  




// Get all the select buttons
const selectButtons = document.querySelectorAll('.select-button');

// Get the total section element
const totalSection = document.querySelector('.total-section');

// Create an empty object to store the selected items and quantities
const selectedItems = {};

// Add event listener to each select button
selectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the tour item container
    const tourItem = button.closest('.tour-item');

    // Get the item name and quantity from the tour item
    const itemName = tourItem.querySelector('h3').textContent.trim();
    const quantity = parseInt(tourItem.querySelector('.quantity-select').value);

    // Get the price from the data attribute
    const price = parseFloat(tourItem.querySelector('.price').dataset.price);

    // Calculate the subtotal for the item
    const subtotal = price * quantity;

    // Update the selectedItems object
    selectedItems[itemName] = {
      quantity,
      subtotal
    };

    // Update the total section
    updateTotalSection();
  });
});

 // Update the total section with the selected items and quantities
function updateTotalSection() {
  // Clear the previous content of the total section
  totalSection.innerHTML = '';

  // Create a heading for the total section
  const heading = document.createElement('h2');
  heading.textContent = 'Your Order';
  totalSection.appendChild(heading);

  // Create a div for each selected item
  for (const itemName in selectedItems) {
    const item = selectedItems[itemName];
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    // Create a span for the item name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = itemName;
    itemDiv.appendChild(nameSpan);

    // Create a span for the quantity
    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = `Quantity: ${item.quantity}`;
    quantitySpan.style.marginLeft = '20px';
    itemDiv.appendChild(quantitySpan);

    // Create a button to remove the item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
      delete selectedItems[itemName];
      updateTotalSection();
    });
    itemDiv.appendChild(removeButton);

    totalSection.appendChild(itemDiv);
  }

  // Calculate the total price
  const totalPrice = Object.values(selectedItems).reduce((total, item) => total + item.subtotal, 0);

  // Create a div for the total price
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');
  totalDiv.textContent = `Total: €${totalPrice.toFixed(2)}`;
  totalSection.appendChild(totalDiv);
  
}





