export default class RangeListSortedArray {
  constructor() {
    this.list = [];
  }

  sortedIndex(value) {
    // binary search
    let low = 0;
    let high = this.list.length;

    while (low < high) {
      const mid = (low + high) >>> 1;
      if (this.list[mid] < value) low = mid + 1;
      else high = mid;
    }

    return low;
  }

  fillRange(startIdx, endIdx) {
    // fill in array using start and end numbers
    return [...Array(endIdx - startIdx)].map((item, i) => startIdx + i);
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add([startIdx, endIdx]) {
    this.list = [
      ...this.list.slice(0, this.sortedIndex(startIdx)),
      ...this.fillRange(startIdx, endIdx),
      ...this.list.slice(this.sortedIndex(endIdx - 1)),
    ];
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove([startIdx, endIdx]) {
    this.list = [
      ...this.list.slice(0, this.sortedIndex(startIdx)),
      ...this.list.slice(this.sortedIndex(endIdx)),
    ];
  }

  /**
   * Get a list of ranges
   * @returns {Array.<Array.<number>>} result - Array of ranges
   */
  get() {
    const { length } = this.list;
    let result = '';

    if (!length) {
      return result;
    }

    let prevItem = this.list[0];
    let rangeStartedAt = prevItem;
    let i;

    for (i = 1; i < length; i += 1) {
      const currentItem = this.list[i];

      if (currentItem - prevItem > 1) {
        result += `[${rangeStartedAt}, ${prevItem + 1})`;
        rangeStartedAt = currentItem;
      }

      prevItem = currentItem;
    }

    result += `[${rangeStartedAt}, ${prevItem + 1})`;

    return result;
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    console.log(this.get());
  }
}

global.RangeListSortedArray = RangeListSortedArray;
