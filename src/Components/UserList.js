import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
const [listOfUsers, setListOfUsers] = useState([]); // State to hold the list of users

useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/users')  // Fetching data from API when component mounts
    .then(response => {
    setListOfUsers(response.data); // Update state with the fetched user data
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
}, []);

return (
<div className='container'>
    <h1 className='head'>USERS LIST</h1>
    <ul>
    {listOfUsers.map(user => (
        <li key={user.id}>{user.name} {user.phone}</li>  // Displaying user's name and phone number
    ))}
    </ul>
</div>
);
}

export default UserList;