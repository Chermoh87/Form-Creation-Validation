// Step 1. Async Function
async function fetchUserData() {

    // Step 2.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }

        const users = await response.json();

        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching data:', error);

        dataContainer.innerHTML = '';
        dataContainer.textContent = 'failed to load user data';
    }
}
document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
});