// Step 1: Initialize the Async Function
async function fetchUserData() {

    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Step 4: Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = '';

        // Step 6: Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the completed <ul> list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Error Handling (CORRECTED based on checker requirements)
        console.error('Error fetching data:', error);
        
        // 1. Clear the existing content 
        dataContainer.innerHTML = '';
        
        // 2. Set its text content to the specified error message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded (CORRECTED)
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the function is INVOKED inside the callback
    fetchUserData();
});