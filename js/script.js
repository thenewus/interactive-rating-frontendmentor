const numElements = document.querySelectorAll(".num")
const submitBtn = document.getElementById('submit-button')
let selectedRating = null;


numElements.forEach(element => {
  element.addEventListener('click', () => {

    numElements.forEach(element => element.classList.remove('clicked'));

    // Add 'clicked' class to the clicked element
    element.classList.add('clicked')
      
    selectedRating = element.textContent;
  })

  
})

submitBtn.addEventListener('click', () => {

  if(selectedRating !== null) {
    window.location.href = `result.html?rating=${selectedRating}`;
  }
  // Navigate to result.html with the selected rating as a parameter
});