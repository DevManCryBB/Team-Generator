// TODO: Write code to define and export the Employee class
class Employee {
    constructor (id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = "Employee"
    }
getName(){
    return this.name
}

getId(){
    return this.id
}

getEmail(){
    return this.email
}

}
module.exports = Employee;