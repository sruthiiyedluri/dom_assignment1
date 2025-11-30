// Select the <ul> and the button
const ul = document.querySelector('#itemList');
const button = document.querySelector('#addBtn');

// Button click event
button.addEventListener('click', () => {
    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = "New Item";

    // Add new <li> to the <ul>
    ul.appendChild(li);

    // Apply styles based on sequence number
    const items = ul.querySelectorAll('li');
    items.forEach((item, index) => {
        if ((index + 1) % 2 === 1) {
            item.style.fontWeight = 'bold';
            item.style.color = 'blue';
            item.style.fontStyle = 'normal';
        } else {
            item.style.fontWeight = 'normal';
            item.style.color = 'red';
            item.style.fontStyle = 'italic';
        }
    });
});