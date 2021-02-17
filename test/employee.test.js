const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return chosen employee options", () => {
    const employee = new Employee(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com"
    );
    expect(employee.name).toBe("Matthew Randolph");
    expect(employee.id).toBe(123);
    expect(employee.email).toBe("mttrndlph@gmail.com");
  });

  it("should return assigned values via objects methods", () => {
    const addEmployee = new Employee(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com"
    );
    expect(addEmployee.getName()).toBe(addEmployee.name);
    expect(addEmployee.getId()).toBe(addEmployee.id);
    expect(addEmployee.getEmail()).toBe(addEmployee.email);
  });
});
