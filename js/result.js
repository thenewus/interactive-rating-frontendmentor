document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedRating = urlParams.get('rating');

  if (selectedRating !== null) {
    // Display the selected rating on the result.html page
    const formattedRating = `You selected ${selectedRating} out of 5`
    document.getElementById('selected-rating').textContent = formattedRating;
  }
});

