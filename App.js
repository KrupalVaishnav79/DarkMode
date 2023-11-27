// Get the toggle button element
const toggleButton = document.querySelector('.toggle-button');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');
});
