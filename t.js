const url = 'https://admin.westcargo.az/admins';

const formData = new FormData();
formData.append('_token', 'XzU4VRQDzRaTwXKXETW5x2LwuK47ZYZ7cKWw5YZy');
formData.append('avatar', new Blob(), ''); // Adjust if you have an actual file
formData.append('name', 'test');
formData.append('role_id', '1');
formData.append('show_menu', '0');
formData.append('show_menu', '1'); // Multiple values for 'show_menu'
formData.append('separate_order', '0');
formData.append('filials[]', '3');
formData.append('districts[]', '2');
formData.append('lang', 'az');
formData.append('email', 'test@admin.com');
formData.append('password', 'test123');

function sendRequest() {
    fetch(url, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Automatically send the request when the script runs
sendRequest();
