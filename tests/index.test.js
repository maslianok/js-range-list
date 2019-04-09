const { RangeListSortedRanges } = require('../src/index');

const rl = new RangeListSortedRanges();

test('add[1, 5]) Should display: [1, 5)', () => {
  rl.add([1, 5]);
  expect(rl.get()).toBe('[1, 5)');
});

test('add([10, 20]) should display: [1, 5) [10, 20)', () => {
  rl.add([10, 20]);
  expect(rl.get()).toBe('[1, 5)[10, 20)');
});

test('add([20, 20]) should display: [1, 5) [10, 20)', () => {
  rl.add([20, 20]);
  expect(rl.get()).toBe('[1, 5)[10, 20)');
});

test('add([20, 21]) should display: [1, 5) [10, 21)', () => {
  rl.add([20, 21]);
  expect(rl.get()).toBe('[1, 5)[10, 21)');
});

test('add([2, 4]) should display: [1, 5) [10, 21)', () => {
  rl.add([2, 4]);
  expect(rl.get()).toBe('[1, 5)[10, 21)');
});

test('add([3, 8]) should display: [1, 8) [10, 21)', () => {
  rl.add([3, 8]);
  expect(rl.get()).toBe('[1, 8)[10, 21)');
});

test('remove([10, 10]) should display: [1, 8) [10, 21)', () => {
  rl.remove([10, 10]);
  expect(rl.get()).toBe('[1, 8)[10, 21)');
});

test('remove([10, 11]) should display: [1, 8) [11, 21)', () => {
  rl.remove([10, 11]);
  expect(rl.get()).toBe('[1, 8)[11, 21)');
});

test('remove([15, 17]) Should display: [1s 8) [11, 15) [17, 21)', () => {
  rl.remove([15, 17]);
  expect(rl.get()).toBe('[1, 8)[11, 15)[17, 21)');
});

test('remove([3, 19]) should display: [1, 3) [19, 21)', () => {
  rl.remove([3, 19]);
  expect(rl.get()).toBe('[1, 3)[19, 21)');
});
