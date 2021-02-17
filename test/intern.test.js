const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should return chosen engineer options", () => {
    const intern = new Intern(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com",
      "NCSU"
    );
    expect(intern.name).toBe("Matthew Randolph");
    expect(intern.id).toBe(123);
    expect(intern.email).toBe("mttrndlph@gmail.com");
    expect(intern.school).toBe("NCSU");
  });
  it("should return assigned values via objects methods", () => {
    const addIntern = new Intern(
      "Matthew Randolph",
      123,
      "mttrndlph@gmail.com",
      "NCSU"
    );
    expect(addIntern.getName()).toBe(addIntern.name);
    expect(addIntern.getId()).toBe(addIntern.id);
    expect(addIntern.getEmail()).toBe(addIntern.email);
    expect(addIntern.getSchool()).toBe(addIntern.school);
    expect(addIntern.getRole()).toBe("Intern");
  });
});
