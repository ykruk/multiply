module.exports = function multiply(first, second) {
  let firstB = BigInt(first);
  let secondB = BigInt(second);

  return (firstB * secondB).toString();
}
