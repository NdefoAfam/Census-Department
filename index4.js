
    // Get a reference to the message container
    const messageContainer = document.getElementById('message-container');

    // Function to display a message
    function showMessage(message, isSuccess) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = message;
        messageDiv.classList.toggle('success', isSuccess);
        messageContainer.appendChild(messageDiv);
    }

    // Function to clear messages
    function clearMessages() {
        while (messageContainer.firstChild) {
            messageContainer.removeChild(messageContainer.firstChild);
        }
    }

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous messages
        clearMessages();

        // Your form submission logic here (e.g., sending data to the server)
        // ...

        // Assuming the submission is successful, you can display a success message
        const isSuccess = true; // Change this based on your actual submission result
        if (isSuccess) {
            showMessage('Message sent successfully!', true);
        } else {
            showMessage('Oops! Something went wrong. Please try again later.', false);
        }
    });

