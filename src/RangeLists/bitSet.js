import BitSet from 'bitset';

export default class RangeListBitSet {
  constructor() {
    this.list = new BitSet();
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add([startIdx, endIdx]) {
    this.list.setRange(startIdx, endIdx - 1, 1);
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove([startIdx, endIdx]) {
    this.list.setRange(startIdx, endIdx - 1, 0);
  }

  /**
   * Get a list of ranges
   * @returns {Array.<Array.<number>>} result - Array of ranges
   */
  get() {
    let result = '';
    const theMostSignificantBitIdx = this.list.msb();
    let currentBitIdx = this.list.lsb();
    let prevBitIsSet = true;
    let rangeStartedAt = currentBitIdx;

    while (currentBitIdx <= theMostSignificantBitIdx) {
      const currentBitIsSet = this.list.get(currentBitIdx);

      if (!prevBitIsSet && currentBitIsSet) {
        rangeStartedAt = currentBitIdx;
      }
      if (!currentBitIsSet && prevBitIsSet) {
        result += `[${rangeStartedAt}, ${currentBitIdx})`;
      }
      prevBitIsSet = currentBitIsSet;
      currentBitIdx += 1;
    }

    result += `[${rangeStartedAt}, ${currentBitIdx})`;

    return result;
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    console.log(this.get());
  }
}

global.RangeListBitSet = RangeListBitSet;
