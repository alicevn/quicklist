const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingList = document.getElementById('shoppingList');
const notification = document.getElementById('notification');

addItemBtn.addEventListener('click', () => {
    const itemName = itemInput.value.trim();

    if (itemName === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = itemName;

    const markBtn = document.createElement('button');
    markBtn.innerHTML = '<input type="checkbox">';

    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'imagens/garbage.png';
    deleteIcon.alt = 'Delete';
    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener('click', () => {
        shoppingList.removeChild(li);
        showNotification();
    });

    li.appendChild(markBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    shoppingList.appendChild(li);

    itemInput.value = '';
});

function showNotification() {
    notification.style.display = 'flex';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function hideNotification() {
    notification.style.display = 'none';
}