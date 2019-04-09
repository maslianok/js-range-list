export default class RangeListSortedRanges {
  constructor() {
    this.list = [];
  }

  normilizeList() {
    const { length } = this.list;
    for (let i = 1; i < length; i += 1) {
      const prevRange = this.list[i - 1];
      const currentRange = this.list[i];

      if (prevRange[1] === currentRange[0] - 1) {
        this.list = [
          ...this.list.slice(0, i - 1),
          [prevRange[0], currentRange[1]],
          ...this.list.slice(i + 1),
        ];
        break;
      }
    }
  }

  getRangeIndexes(range) {
    const rangeStart = range[0];
    const rangeEnd = range[1] - 1;

    if (rangeEnd < rangeStart) {
      return undefined;
    }

    let startIdx;
    let endIdx;
    const { length } = this.list;
    for (let i = 0; i < length; i += 1) {
      const currentRange = this.list[i];

      if (typeof startIdx === 'undefined' && currentRange[1] >= range[0]) {
        startIdx = i;
      }

      if (typeof endIdx === 'undefined' && currentRange[0] >= range[1]) {
        endIdx = i;
        break;
      }
    }

    return [startIdx, endIdx];
  }

  getRangesAfterRemove(range, startIdx, endIdx) {
    const result = [];
    if (range[0] > this.list[startIdx][0]) {
      result.push([this.list[startIdx][0], range[0] - 1]);
    }

    if (range[1] - 1 < this.list[endIdx][1]) {
      result.push([range[1], this.list[endIdx][1]]);
    }

    return result;
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    const indexes = this.getRangeIndexes(range);

    if (!indexes) {
      return;
    }

    const [startIdx, endIdx] = indexes;
    if (typeof startIdx === 'undefined') {
      // push new range to the end
      this.list.push([range[0], range[1] - 1]);
    } else if (endIdx === 0) {
      // insert to the beginning
      this.list.unshift([range[0], range[1] - 1]);
    } else {
      const rangeStart = Math.min(range[0], this.list[startIdx][0]);

      if (typeof endIdx === 'undefined') {
        // remove everything starting from startIdx to the end and push new range
        this.list = [...this.list.slice(0, startIdx), [rangeStart, range[1] - 1]];
      } else {
        const rangeEnd = Math.max(range[1] - 1, this.list[endIdx - 1][1]);

        this.list = [
          ...this.list.slice(0, startIdx),
          [rangeStart, rangeEnd],
          ...this.list.slice(endIdx),
        ];
      }
    }

    this.normilizeList();
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    const indexes = this.getRangeIndexes(range);

    if (!indexes) {
      return;
    }

    const [startIdx, endIdx] = indexes;
    if (typeof startIdx === 'undefined' || endIdx === 0) {
      return;
    }

    const endPatched = typeof endIdx === 'undefined' ? this.list.length - 1 : endIdx;

    if (typeof endIdx === 'undefined') {
      this.list = [
        ...this.list.slice(0, startIdx),
        ...this.getRangesAfterRemove(range, startIdx, endPatched),
      ];
    } else {
      this.list = [
        ...this.list.slice(0, startIdx),
        ...this.getRangesAfterRemove(range, startIdx, endPatched),
        ...this.list.slice(endIdx),
      ];
    }
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

    for (let i = 0; i < length; i += 1) {
      result += `[${this.list[i][0]}, ${this.list[i][1] + 1})`;
    }

    return result;
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    console.log(this.get());
  }
}

global.RangeListSortedRanges = RangeListSortedRanges;
