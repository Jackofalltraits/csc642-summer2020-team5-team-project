import Validation from "../docentSignup/validator.js";
const { expect }  = require("chai");


describe("docentSignup", function () {

  describe("validator", function () {

    let data = {}

    it("all fields are required", async function () {
      data.firstName = 'first'
      data.lastName = 'last'
      data.email = 'email'
      data.password = 'same'
      data.confirmPassword = 'same'
      const { isValid, errors } = Validation(data);

      await expect(isValid).to.equal(true);
    });

    it("Passwords must be the same", async function () {
      data.firstName = ''
      data.testLastname = ''
      data.email = ''
      data.password = 'same'
      data.confirmPassword = ''
      const { isValid, errors } = Validation(data);
      await expect(isValid).to.equal(false);
    });
  });
})