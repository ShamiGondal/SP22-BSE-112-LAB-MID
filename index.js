let listContainer = document.getElementById('listContainer') 
let addbtn = document.getElementById('addbtn')


addbtn.addEventListener('click', function () {
    
    let inputText = document.getElementById('inputText').value;
    if (inputText) {
        let timestamp = Date.now()   //actually its time and date collectively but i have used it as key
        // let index = 0
        str = `<input type="checkbox" id="checkbox" class="checkbox"><span> ${inputText}</span> <button class='delbtn' onclick='delBtn(${timestamp})'> Delete </button> <button id='editbtn' class='editbtn' > Edit</button>    ` //these `` are backticks , 
        let li = document.createElement('li') 
        li.innerHTML = str 
        listContainer.appendChild(li) 
        document.getElementById('inputText').value = '';
        // index++;
    } else {
        alert('Title Required')  
    }
    `this is the name ${name}`
})


function delBtn(timestamp) {  
    let lis = listContainer.getElementsByTagName('li');
    
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if(li.innerHTML.includes(timestamp)){  
            listContainer.removeChild(li) 
            console.log("li deleted with the secrete code " + timestamp)
            return
        }
    }
      
    console.log("Element not found with timestamp: " + timestamp);
}

listContainer.addEventListener('click', function(event) {
    if (event.target && event.target.className == 'editbtn') {
        let li = event.target.parentElement;
        let textElement = li.querySelector('input[type="checkbox"] + span');
        let text = textElement.textContent.trim();
        document.getElementById('inputText').value = text;
        addbtn.style.display = 'none';
        savebtn.style.display = 'block';
        
        savebtn.addEventListener('click', function() {
            let inputText = document.getElementById('inputText').value;
            if (inputText) {
                textElement.textContent = inputText; // Update the text content of the span
                addbtn.style.display = 'block';
                savebtn.style.display = 'none';
                document.getElementById('inputText').value = '';
            } else {
                alert('Title Required');
            }
        });
    }
});



listContainer.addEventListener('click', function (event) {
    if (event.target && event.target.className === 'checkbox') {
        const li = event.target.parentElement;
        if (event.target.checked) {
            li.classList.add('completed');
            const editBtn = li.querySelector('.editbtn');
            const delBtn = li.querySelector('.delbtn');
            editBtn.style.display = 'none';
            delBtn.style.display = 'none';
        } else {
            li.classList.remove('completed');
            const editBtn = li.querySelector('.editbtn');
            const delBtn = li.querySelector('.delbtn');
            editBtn.style.display = 'inline-block';
            delBtn.style.display = 'inline-block';
        }
    }
});
