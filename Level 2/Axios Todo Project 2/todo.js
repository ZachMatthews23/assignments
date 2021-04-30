function getData(){
    axios.get("https://api.vschool.io/zacharymatthews/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data){
    clearList()

    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        const title = document.createElement('h2')
        const delBtn = document.createElement('button')
        const input = document.createElement('input')
        const price = document.createElement('p')
        const description = document.createElement('p')
        const image = document.createElement('img')

        title.textContent = data[i].title
        price.textContent = "$ " + data[i].price
        description.textContent = data[i].description
        image.src = data[i].imgUrl
        delBtn.textContent = "Delete"
        input.type = "checkbox"
        div.className = "listItem"
        title.className = "todoItem"
        input.className = "check"
        delBtn.className = "delete"
        image.className = "image"

        document.getElementById('myList').appendChild(div)
        div.appendChild(title)
        div.appendChild(input)
        div.appendChild(delBtn)
        div.appendChild(price)
        div.appendChild(description)
        div.appendChild(image)

        if(data[i].completed === true){
            title.style.textDecoration = "line-through"
            price.style.textDecoration = "line-through"
            description.style.textDecoration = "line-through"
            input.checked = true
        }

        delBtn.addEventListener("click", function(){
            axios.delete("https://api.vschool.io/zacharymatthews/todo/" + data[i]._id)
                .then(res => getData())
                .catch(err => console.log(err))
        })

        input.addEventListener("change", function(){
            if(this.checked){
                axios.put("https://api.vschool.io/zacharymatthews/todo/" + data[i]._id, {completed: true})
                    .then(res => getData())
                    .catch(err => console.log(err))
            } else{
                axios.put("https://api.vschool.io/zacharymatthews/todo/" + data[i]._id, {completed: false})
                    .then(res => getData())
                    .catch(err => console.log(err))
            }
        })
    }
}

function clearList(){
    const item = document.getElementById('myList')
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}   

getData()

const todoForm = document["myForm"]

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.input.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.image.value
    }

    todoForm.input.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.image.value = ""

    axios.post("https://api.vschool.io/zacharymatthews/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})