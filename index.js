let count = 0;
let button = document.querySelector('#increment-btn')
button.addEventListener("click", increment)




// a function to increament the count
function increment(){
    let counter = document.querySelector(".count-er")
    count = count + 1
    counter.innerText = count //this increases the inner text 0
}

saveBtn= document.querySelector("#save-btn")
saveBtn.addEventListener("click", save) // event listener that runs the save function on clicking the save button

let saveEl = document.getElementById('save-el');
console.log(saveEl)

function save(){
    let countStr = count + " - "; // catenating two strings
    saveEl.innerText += countStr // updating the innerText using the countStr variable 
}



