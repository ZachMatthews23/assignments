const addForm = document['add']
const subForm = document['sub']
const mulForm = document['mult']

addForm.addEventListener("submit", function(event){
    event.preventDefault();

    const addNum1 = addForm.addNum1.value
    const addNum2 = addForm.addNum2.value
    addForm.addNum1.value = ""
    addForm.addNum2.value = ""

    const addOutcome = document.createElement('h3')
    addOutcome.textContent = +addNum1 + +addNum2
    addOutcome.style.backgroundColor = 'green'
    addOutcome.style.textAlign = 'center'
    document.getElementById('add').append(addOutcome) 

});

subForm.addEventListener("submit", function(event){
    event.preventDefault();

    const subNum1 = subForm.subNum1.value
    const subNum2 = subForm.subNum2.value
    subForm.subNum1.value = ""
    subForm.subNum2.value = ""

    const subOutcome = document.createElement('h3')
    subOutcome.textContent = +subNum1 - +subNum2
    subOutcome.style.backgroundColor = 'red'
    subOutcome.style.textAlign = 'center'
    document.getElementById('sub').append(subOutcome) 

});

mulForm.addEventListener("submit", function(event){
    event.preventDefault();

    const multNum1 = mulForm.multNum1.value
    const multNum2 = mulForm.multNum2.value
    mulForm.multNum1.value = ""
    mulForm.multNum2.value = ""

    const multOutcome = document.createElement('h3')
    multOutcome.textContent = +multNum1 * +multNum2
    multOutcome.style.backgroundColor = 'cyan'
    multOutcome.style.textAlign = 'center'
    document.getElementById('mult').append(multOutcome)
})