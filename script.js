function setReminder() {
    var day = document.getElementById('day').value;
    var time = document.getElementById('time').value;
    var activity = document.getElementById('activity').value;
  
    // Schedule the reminder
    scheduleReminder(day, time, activity);
  }
  
  function scheduleReminder(day, time, activity) {
    // Get current date and time
    var currentDate = new Date();
    var currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    var currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();
  
    // Calculate time difference
    var reminderTime = new Date(day + ' ' + time);
    var timeDiff = reminderTime - currentDate;
  
    if (timeDiff <= 0) {
      alert('Please select a future time.');
      return;
    }
  
    // Schedule notification
    setTimeout(function() {
      // Play sound
      var reminderSound = document.getElementById('reminder-sound');
      reminderSound.play();
  
      // Show notification
      alert('Reminder: ' + activity);
  
      // Optional: Use a more sophisticated notification system//
      // For simplicity, an alert is used here.
    }, timeDiff);
  }
  