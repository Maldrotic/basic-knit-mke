const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(1, 3);
  expect(result).toBe(4);
});