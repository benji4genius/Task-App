const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    /* This control flow logic alerts user to type something 
    in the input field */
    if(inputBox.value === ''){
        alert('You must write something!');
    } else{
        let li = document.createElement("li"); // Here an list element is created once the user types in something
        li.innerHTML = inputBox.value; // This part grabs the text inputed by the user and store in the variable
        listContainer.appendChild(li);// This part adds the content grabbed from the input box and adds it to the screen as list
        let span = document.createElement('span');
        span.innerHTML ='\u00d7';
        li.appendChild(span);
    }
    inputBox.value = ''; // This reassigns the value in the input field to an empty string thereby clearing the input field
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();