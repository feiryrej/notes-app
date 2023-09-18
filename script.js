const enterElement = document.querySelector('.enter');

enterElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

const listContainer = document.getElementById('list-container');

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const inputBox = document.getElementById('input-box');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');

        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');

        span.innerHTML = '\u00d7';
        li.appendChild(span);

        saveData();
    }
    inputBox.value = '';
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
