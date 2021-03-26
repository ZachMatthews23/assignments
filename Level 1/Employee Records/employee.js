var employees = []

function Employee(name, title, salary, status = "Full Time"){
    this.name = name,
    this.title = title,
    this.salary = salary,
    this.status = status,
    this.form = function printEmployeeForm(){
        console.log(this.name + " " + this.title + " " + this.salary + " " + this.status)
        employees.push()
    }
}

for(var i = 0; i < 1; i++){
    var first = new Employee("Karen", "Manager", "10,000/ hour")
    first.form();
    var second = new Employee("Jim", "Assistant to the Regional Manager", "$5,000/ hour")
    second.form();
    var third = new Employee("Bob", "Janitor", "100,000/ hour", "Part Time")
    third.form()
    employees.push(first);
    employees.push(second);
    employees.push(third)
}

console.log(employees)


