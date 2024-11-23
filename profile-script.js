// Mock API call to simulate finding a user (replace with real API)
function findUserAPI(userID) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userFound = Math.random() > 0.5; // Simulate a 50% chance of finding the user
      resolve(userFound);
    }, 1000); // Simulate network delay
  });
}

// Mock API call to simulate sending an invitation (replace with real API)
function inviteUserAPI(userID) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // Simulate successful invitation sending
    }, 1000);
  });
}

// Function to find a user
async function findUser() {
  var userID = prompt("Enter the UserID to find:");
  if (userID) {
    try {
      const userFound = await findUserAPI(userID);
      if (userFound) {
        alert('User found: ' + userID);
      } else {
        alert('No such user found: ' + userID);
      }
    } catch (error) {
      alert('Error finding user. Please try again.');
    }
  } else {
    alert('No UserID entered.');
  }
}

// Function to invite a user
async function inviteUser() {
  var userID = prompt("Enter the UserID to invite:");
  if (userID) {
    try {
      const inviteSent = await inviteUserAPI(userID);
      if (inviteSent) {
        alert('Invitation sent to ' + userID);
      } else {
        alert('Failed to send invitation.');
      }
    } catch (error) {
      alert('Error sending invitation. Please try again.');
    }
  } else {
    alert('No UserID entered.');
  }
}

// Mock daily submissions data, replace with API call
const submissions = {
  "2024-09-01": true,
  "2024-09-03": true,
  "2024-09-05": true,
  // Add more days for demonstration purposes
};

// Generate calendar for daily submissions
function generateCalendar() {
  const calendar = document.getElementById('calendar');
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    const date = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    dayElement.classList.add('calendar-day');
    dayElement.innerText = day;

    // Highlight if a submission exists for this day
    if (submissions[date]) {
      dayElement.classList.add('active-day');
    }

    calendar.appendChild(dayElement);
  }
}

// Initialize the calendar on page load
document.addEventListener('DOMContentLoaded', generateCalendar);
