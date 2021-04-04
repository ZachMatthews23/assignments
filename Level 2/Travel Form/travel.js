const form = document['travelForm']

form.addEventListener('submit', function(event){
    event.preventDefault();
    const first = form.firstName.value;
    const last = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.location.value;
    const food = [];

    if(form.meat.checked){
        food.push(document.getElementById('meat').value);
    } if(form.noMeat.checked){
        food.push(document.getElementById('noMeat').value);
    } if(form.surprise.checked){
        food.push(document.getElementById('surprise').value);
    }

    alert("First Name: " + first + "\n Last Name: " + last + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + location + "\nFood Preference: " + food)
})
