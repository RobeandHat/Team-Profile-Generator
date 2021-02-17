const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return chosen engineer options", () => {
    const engineer = new Engineer(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com",
      "RobeandHat"
    );
    expect(engineer.name).toBe("Matthew Randolph");
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe("mttrndlph@gmail.com");
    expect(engineer.github).toBe("RobeandHat");
  });
  it("should return assigned values via objects methods", () => {
    const addEngineer = new Engineer(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com",
      "RobeandHat"
    );
    expect(addEngineer.getName()).toBe(addEngineer.name);
    expect(addEngineer.getId()).toBe(addEngineer.id);
    expect(addEngineer.getEmail()).toBe(addEngineer.email);
    expect(addEngineer.getGithub()).toBe(addEngineer.github);
    expect(addEngineer.getRole()).toBe("Engineer");
  });
});
