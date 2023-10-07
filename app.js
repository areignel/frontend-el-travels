const apiUrl = 'https://github.com/areignel/El-Travels/tree/main/my-project-directory'; // Replace with your actual API URL

// Function to fetch and display destinations
function fetchDestinations() {
    fetch(`https://github.com/areignel/El-Travels/blob/main/my-project-directory/routes/destinations.js`) // Use apiUrl to construct the full URL
        .then((response) => response.json())
        .then((data) => {
            // ...rest of the code remains the same
        })
        .catch((error) => {
            console.error('Error fetching destinations:', error);
        });
}

// Function to handle user registration
function registerUser() {
    const registrationForm = document.getElementById('registration-form');
    const formData = new FormData(registrationForm);

    fetch(`${apiUrl}/routes/users`, { // Use apiUrl to construct the full URL
        method: 'POST',
        body: formData,
    })
    .then((response) => {
        if (response.status === 201) {
            // ...rest of the code remains the same
        } else {
            // ...rest of the code remains the same
        }
    })
    .catch((error) => {
        console.error('Error during registration:', error);
    });
}

// Function to handle user login
function loginUser() {
    const loginForm = document.getElementById('login-form');
    const formData = new FormData(loginForm);

    fetch(`${apiUrl}routes/users`, { // Use apiUrl to construct the full URL
        method: 'POST',
        body: formData,
    })
    .then((response) => {
        if (response.status === 200) {
            // ...rest of the code remains the same
        } else {
            // ...rest of the code remains the same
        }
    })
    .catch((error) => {
        console.error('Error during login:', error);
    });
}

// Function to handle booking
function bookDestination() {
    // ...rest of the code remains the same
}

// Call the fetchDestinations function to populate the destination list
fetchDestinations();
