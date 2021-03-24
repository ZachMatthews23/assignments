const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const input = form.title.value
    form.title.value = ""
    const ul = document.getElementById("list")
    
    const li = document.createElement("li")
    li.setAttribute("id", "item")
    ul.append(li)

    const div = document.createElement("div")
    div.textContent = input
    div.classList.add("newItem")
    li.append(div)
    
    const edit = document.createElement("button")
    edit.textContent = "edit"
    edit.style.marginRight = "4px"
    li.append(edit)
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.classList.add("delete")
    li.append(deleteButton)
    
    deleteButton.addEventListener("click", function(){
        div.remove()
        edit.remove()
        deleteButton.remove()
        li.remove
    })

    edit.addEventListener("click", function(event){
        event.preventDefault()
        var input = document.createElement("input")
        div.contentEditable = "true";
        var newDiv = input.value    
    })
})






