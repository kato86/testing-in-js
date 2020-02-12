const operation = require("./operation");
const assert = require("assert");

//mathematical operators

//add operator
it("correctly calculates the sum of 1 and 3", () => {
  assert.equal(operation.add(1, 3), 4);
});

it("correctly calculates the sum of -1 and -1", () => {
  assert.equal(operation.add(-1, -1), -2);
});

//substract operator
it("correctly calculates the difference of 33 and 3", () => {
  assert.equal(operation.substract(33, 3), 30);
});

//multiply operator
it("correctly calculate the product of 12 and 12", () => {
  assert.equal(operation.multiply(12, 12), 144);
});

//divide operator
if (
  ("correctly calculate the quotient of 10 and 2",
  () => {
    assert.equal(operation.divide(10, 2), 5);
  })
);

// it("should return true", () => {
//   assert.equal(true, true);
// });
