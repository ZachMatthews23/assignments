const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = form.title.value
    form.title.value = ""
    const li = document.createElement("li")
    const div = document.createElement("div")
    const edit = document.createElement("button")
    const x = document.createElement("button")
    div.textContent = input
    edit.textContent = "edit"
    x.textContent = "X"
    const ul = document.getElementById("list")
    div.setAttribute("id", "list")
    ul.append(li)
    li.append(div)
    li.append(edit)
    li.append(x)
})

