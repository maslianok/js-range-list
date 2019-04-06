export default class RangeListPure {
  constructor() {
    this.list = [];
  }
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */


  add([startIdx, endIdx]) {
    // looping through the given range
    for (let i = startIdx; i < endIdx; i += 1) {
      // skip useless assignments
      if (!this.list[i]) {
        // this approach to extend arrays is much faster
        // than any other solution I've seen (e.g. `push` or `concat`)
        this.list[i] = true;
      }
    }
  }
  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */


  remove([startIdx, endIdx]) {
    for (let i = startIdx; i < endIdx; i += 1) {
      if (this.list[i]) {
        this.list[i] = undefined;
      }
    }
  }
  /**
   * Get a list of ranges
   * @returns {Array.<Array.<number>>} result - Array of ranges
   */


  get() {
    const {
      length
    } = this.list;
    let result = '';
    let prevBitIsSet = false;
    let rangeStartedAt;
    let i;

    for (i = 0; i <= length; i += 1) {
      const currentBitIsSet = this.list[i];

      if ((!i || !prevBitIsSet) && currentBitIsSet) {
        rangeStartedAt = i;
      }

      if (!currentBitIsSet && prevBitIsSet) {
        result += `[${rangeStartedAt}, ${i}) `;
      }

      prevBitIsSet = currentBitIsSet;
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
global.RangeListPure = RangeListPure;