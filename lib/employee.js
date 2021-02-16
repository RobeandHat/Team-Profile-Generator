class Employee {
  constructor(name, id, email, jobtitle) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.jobtitle = jobtitle;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
