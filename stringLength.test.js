const stringLength = require("./stringLength");

test("this is the number of letters ", () => {
  let string = "dog";
  expect(stringLength(string)).toBe(3);
});
