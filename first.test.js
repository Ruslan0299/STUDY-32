//перше завдання
describe("validateEmail", function () {
  it("not an empty string", function () {});
});

//друге, третє, четверте завдання
let assert = chai.assert;
describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(""), false);
    });
    it("length of string", function () {
      assert.isFalse(validateEmail("qwerty"), "string is too long"); //завдання 2
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });
    it("not an empty string", function () {
      assert.equal(validateEmail("   "), false);
    });
  });
  describe("valid data", function () {
    it("only one @", function () {
      assert.isFalse(validateEmail("@@"), "Only one @ in string"); //третє завдання
    });
    it("Don`t have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don`t have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
    });
    it("Don`t have '.' before @", function () {
      assert.isFalse(
        validateEmail("email@gmailcom"),
        "Don`t have '.' before @"
      ); //четверте завдання
    });
  });
});

// validateEmail
// not an empty string‣
// validateEmail
// valid string
// not an empty string‣
// length of string‣
// assert.isFalse(validateEmail("qwerty"), "string is too long");//завдання 2
// typeof string‣
// not an empty string‣
// valid data
// only one @‣
// Don`t have the @ or @ the first character‣
// Don`t have '.' before @
