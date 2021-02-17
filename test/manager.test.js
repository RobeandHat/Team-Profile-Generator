const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should return chosen manager options", () => {
    const roomNumber = 123;
    const manager = new Manager(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com",
      roomNumber
    );
    expect(manager.name).toBe("Matthew Randolph");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("mttrndlph@gmail.com");
    expect(manager.roomNumber).toBe(123);
  });
  it("should return assigned values via objects methods", () => {
    const roomNumber = 123;
    const addManager = new Manager(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com",
      roomNumber
    );
    expect(addManager.getName()).toBe(addManager.name);
    expect(addManager.getId()).toBe(addManager.id);
    expect(addManager.getEmail()).toBe(addManager.email);
    expect(addManager.getroomNumber()).toBe(123);
    expect(addManager.getRole()).toBe("Manager");
  });
});
