const {stringLength, reverseString, calculator, capitalize} = require('./index')

//!Task 1
it('Characters count', () =>expect(stringLength("hello")).toBe(5))
it("count : not less than 1 ", () => expect(stringLength("hello word")).toBeGreaterThanOrEqual(1))
it("count : not less than 1 ", () => expect(stringLength("i")).toBeGreaterThanOrEqual(1))
it("count : not more than 1 ", () => expect(stringLength("hello word")).toBeLessThanOrEqual(10))
it('Invalid string length', () => expect(() => (stringLength(""))).toThrow())

//!Task 2
it("Reverse a string ", () => expect(reverseString("hello")).toBe('olleh'))
it("Reverse a string ", () => expect(reverseString("1")).toBe('1'))

//!Task 3
describe('Calculator operations', () => {
  describe("Add tests", () => {
    it("positive numbers", () => expect(calculator.add(4,5)).toBe(calculator.add(5,4)));
    it("addition with 0", () => expect(calculator.add(calculator.a, 0)).toBe(calculator.a));
    it("negative numbers", () => expect(calculator.add(-calculator.a, -calculator.b)).not.toBeGreaterThan(0));
  });
  describe("subtract tests", () => {
    describe("positive numbers", ()=> {
      it("a > b", () => expect(calculator.subtract(6,5)).toBeGreaterThan(0));
      it("a<b", () => expect(calculator.subtract(4, 7)).toBeLessThan(0));
      it("a === b", () => expect(calculator.subtract(4, 4)).toBe(0));
    });
    describe("negative numbers", () => {
      it("a > b", () => expect(calculator.subtract(-6,-7)).toBeGreaterThan(0));
      it("a<b", () => expect(calculator.subtract(-8, -7)).toBeLessThan(0));
      it("a === b", () => expect(calculator.subtract(-4, -4)).toBe(0));
    });  
  });
  describe("Devide tests", () => {
    it("positive numbers", () => expect(calculator.divide(4,5)).toBe(4/5));
    it("Positive with negative number", () => expect(calculator.divide(calculator.a, -calculator.b)).toBeLessThan(0));
    it("negative numbers", () => expect(calculator.divide(-calculator.a, -calculator.b)).toBeGreaterThan(0));
    it('when b ===0', () => expect(() => (calculator.divide(calculator.a,0))).toThrow())
  });
  describe("Multiply tests", () => {
    it("positive numbers", () => expect(calculator.multiply(4,5)).toBe(4*5));
    it("Positive with negative number", () => expect(calculator.multiply(calculator.a, -calculator.b)).toBeLessThan(0));
    it("negative numbers", () => expect(calculator.multiply(-calculator.a, -calculator.b)).toBeGreaterThan(0));
    it('with 0', () => expect(calculator.multiply(calculator.a,0)).toBe(0))
  });
})

//!Task 4
it("first letter cap", () => expect(capitalize("joseph")).toBe("Joseph"))