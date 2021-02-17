const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, roomNumber) {
    super(name, id, email);
    this.roomNumber = roomNumber;
  }

  getRole() {
    return "Manager";
  }

  getroomNumber() {
    return this.roomNumber;
  }
}

module.exports = Manager;
