// Function to calculate the number of days until New Year's Day
function getDaysUntilNewYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const timeDifference = newYear - currentDate;
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysRemaining;
  }
  
  // Function to update the countdown element
  function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const daysRemaining = getDaysUntilNewYear();
  
    countdownElement.textContent = `Days until New Year: ${daysRemaining}`;
  }
  
  // Update the countdown initially
  updateCountdown();
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  