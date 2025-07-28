
window.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const form = document.querySelector('form');

  // Add submit event listener
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert('Your form has been filled successfully');
    // Optionally, you can reset the form here:
   
  });
});
