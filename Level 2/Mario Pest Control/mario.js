const form = document['form']

form.addEventListener('submit', function(event){
    event.preventDefault();
    const goomba = form.goomba.value;
    const bobomb = form.bobomb.value;
    const cheep = form.cheep.value;

    const goombaCost = goomba * 5
    const bobombCost = bobomb * 7
    const cheepCost = cheep * 11

    const total = goombaCost + bobombCost + cheepCost

    const totalValue = document.createElement('h3')
    totalValue.textContent = total + " coins"
    document.getElementById('total').append(totalValue)
})