function addThree(url = '', cartItems = {}) {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json' },
        body: JSON.stringify(cartItems),
    })
    .then(response => response.json());
}

addThree('/api/storefront/cart', {
    lineItems: [
        {
            quantity: 1,
            productId: 86,
        },
        {
            quantity: 1,
            productId: 88,
        },
        {
            quantity: 1,
            productId: 77,
        },
    ],
})
.then(data => JSON.stringify(data));
