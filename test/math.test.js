const assert = require("assert")
const code = require("../math")

describe("math", function () {
  describe("getSquareOfNumber", function () {
    it("returns the square of two integers", function () {
      assert.equal(code.getSquareOfNumber(3, 3), 9)
    });
  });
  describe("getSquareOfNumber", function () {
    it("returns the square of two negative integers", function () {
      assert.equal(code.getSquareOfNumber(-4, -4), 16)
    });
  });
});
