const url = 'https://admin.westcargo.az/transactions';
const data = {
    "_token": "Rd8K5pjXc8SKpKqzuTnuE0XWKF6aGH0YAVY0cLOn",
    "who": "ADMIN",
    "note": "HELLO",
    "user_id": 117,
    "amount": "100",
    "currency": "AZN",
    "for_country": "TR",
    "type": "OUT",
    "paid_for": "ORDER_BALANCE",
    "paid_by": "MILLION"
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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
.catch(error => {
    console.error('Error:', error);
});
