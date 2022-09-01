let count = 0;
let button = document.querySelector('#increment-btn')
let counter = document.querySelector(".count-er")
button.addEventListener("click", increment)




// a function to increament the count
function increment(){
    let counter = document.querySelector(".count-er")
    count = count + 1
    counter.textContent = count //this increases the inner text 0
}
const recordSaved = document.querySelector('.recordedscore')
// console.log(recordSaved)
record = 0


recordSaved.addEventListener('click',() =>{
    record += count;
    recordSaved.textContent = recordSaved.textContent + record + ' ' ;
})
// const recordsaved = () => {

// }

saveBtn= document.querySelector("#save-btn")
saveBtn.addEventListener("click", save) // event listener that runs the save function on clicking the save button

let saveEl = document.getElementById('save-el');
// console.log(saveEl)

function save(){
    let countStr = count + " - "; // catenating two strings
    saveEl.textContent += countStr // updating the innerText using the countStr variable 
    counter.textContent = 0 
    count = 0
    
}



