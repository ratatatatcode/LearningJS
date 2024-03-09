// With the help of GPT.
// How to create element?
// How to add a class?
// How to add button and functionality?

function add() {
    const newDiv = document.createElement('div');
    const newButton = document.createElement('button');
    newButton.textContent = '-';
    newButton.classList.add('delete-button');

    newButton.addEventListener('click', function() {
        newDiv.remove();
    });

    let val = document.getElementById('textpart');
    
    newDiv.textContent = val.value;
    
    newDiv.appendChild(newButton);
    
    document.getElementById('list').appendChild(newDiv);
    newDiv.classList.add('todo');
}