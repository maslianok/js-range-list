import {
  RangeListBitSet,
  RangeListBoolArray,
  RangeListSortedArray,
  RangeListSortedRanges,
} from 'js-range-list';

function executeTest(list) {
  list.add([1, 5]);
  list.print();
  // Should display: [1, 5)

  list.add([10, 20]);
  list.print();
  // Should display: [1, 5) [10, 20)

  list.add([20, 20]);
  list.print();
  // Should display: [1, 5) [10, 20)

  list.add([20, 21]);
  list.print();
  // Should display: [1, 5) [10, 21)

  list.add([2, 4]);
  list.print();
  // Should display: [1, 5) [10, 21)

  list.add([3, 8]);
  list.print();
  // Should display: [1, 8) [10, 21)

  list.remove([10, 10]);
  list.print();
  // Should display: [1, 8) [10, 21)

  list.remove([10, 11]);
  list.print();
  // Should display: [1, 8) [11, 21)

  list.remove([15, 17]);
  list.print();
  // Should display: [1, 8) [11, 15) [17, 21)

  list.remove([3, 19]);
  list.print();
  // Should display: [1, 3) [19, 21)
}

// executeTest(new RangeListBitSet());
// executeTest(new RangeListBoolArray());
// executeTest(new RangeListSortedArray());
executeTest(new RangeListSortedRanges());
