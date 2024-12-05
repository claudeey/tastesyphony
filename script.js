// Get references to form elements
const orderForm = document.getElementById('orderForm');
const totalPriceElement = document.getElementById('totalPrice');

// Calculate and update total price based on selected items
function calculateTotal() {
    let total = 0;
    const checkboxes = orderForm.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    });

    // Update the displayed total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Add event listeners to update the total price whenever an item is selected
orderForm.addEventListener('change', calculateTotal);

// Initial calculation of the total when the page loads
calculateTotal();
