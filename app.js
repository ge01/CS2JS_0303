document.getElementById("myBtn").addEventListener("click", function(){
  computeSale();
});

function computeSale(){
  // Get the item's original price.
  var originalPrice = document.getElementById('original').value;

  // Get the discount percentage.
  var discountPercentage = document.getElementById('discount').value;

  // Move the percentage's decimal point left two spaces.
  discountPercentage = discountPercentage / 100;

  // Calculate the amount of the discount.
  var discountAmount = originalPrice * discountPercentage;

  // Calculate the sale price.
  var salePrice = originalPrice - discountAmount;

  // Display the sale price
  document.getElementById('outSalePrice').innerHTML = "Sale Price: " + salePrice.toFixed(2);
}
