"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RangeListSortedRanges =
/*#__PURE__*/
function () {
  function RangeListSortedRanges() {
    _classCallCheck(this, RangeListSortedRanges);

    this.list = [];
  }

  _createClass(RangeListSortedRanges, [{
    key: "normilizeList",
    value: function normilizeList() {
      var length = this.list.length;

      for (var i = 1; i < length; i += 1) {
        var prevRange = this.list[i - 1];
        var currentRange = this.list[i];

        if (prevRange[1] === currentRange[0] - 1) {
          this.list = [].concat(_toConsumableArray(this.list.slice(0, i - 1)), [[prevRange[0], currentRange[1]]], _toConsumableArray(this.list.slice(i + 1)));
          break;
        }
      }
    }
  }, {
    key: "getRangeIndexes",
    value: function getRangeIndexes(range) {
      var rangeStart = range[0];
      var rangeEnd = range[1] - 1;

      if (rangeEnd < rangeStart) {
        return undefined;
      }

      var startIdx;
      var endIdx;
      var length = this.list.length;

      for (var i = 0; i < length; i += 1) {
        var currentRange = this.list[i];

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
  }, {
    key: "getRangesAfterRemove",
    value: function getRangesAfterRemove(range, startIdx, endIdx) {
      var result = [];

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

  }, {
    key: "add",
    value: function add(range) {
      var indexes = this.getRangeIndexes(range);

      if (!indexes) {
        return;
      }

      var _indexes = _slicedToArray(indexes, 2),
          startIdx = _indexes[0],
          endIdx = _indexes[1];

      if (typeof startIdx === 'undefined') {
        // push new range to the end
        this.list.push([range[0], range[1] - 1]);
      } else if (endIdx === 0) {
        // insert to the beginning
        this.list.unshift([range[0], range[1] - 1]);
      } else {
        var rangeStart = Math.min(range[0], this.list[startIdx][0]);

        if (typeof endIdx === 'undefined') {
          // remove everything starting from startIdx to the end and push new range
          this.list = [].concat(_toConsumableArray(this.list.slice(0, startIdx)), [[rangeStart, range[1] - 1]]);
        } else {
          var rangeEnd = Math.max(range[1] - 1, this.list[endIdx - 1][1]);
          this.list = [].concat(_toConsumableArray(this.list.slice(0, startIdx)), [[rangeStart, rangeEnd]], _toConsumableArray(this.list.slice(endIdx)));
        }
      }

      this.normilizeList();
    }
    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */

  }, {
    key: "remove",
    value: function remove(range) {
      var indexes = this.getRangeIndexes(range);

      if (!indexes) {
        return;
      }

      var _indexes2 = _slicedToArray(indexes, 2),
          startIdx = _indexes2[0],
          endIdx = _indexes2[1];

      if (typeof startIdx === 'undefined' || endIdx === 0) {
        return;
      }

      var endPatched = typeof endIdx === 'undefined' ? this.list.length - 1 : endIdx;

      if (typeof endIdx === 'undefined') {
        this.list = [].concat(_toConsumableArray(this.list.slice(0, startIdx)), _toConsumableArray(this.getRangesAfterRemove(range, startIdx, endPatched)));
      } else {
        this.list = [].concat(_toConsumableArray(this.list.slice(0, startIdx)), _toConsumableArray(this.getRangesAfterRemove(range, startIdx, endPatched)), _toConsumableArray(this.list.slice(endIdx)));
      }
    }
    /**
     * Get a list of ranges
     * @returns {Array.<Array.<number>>} result - Array of ranges
     */

  }, {
    key: "get",
    value: function get() {
      var length = this.list.length;
      var result = '';

      if (!length) {
        return result;
      }

      for (var i = 0; i < length; i += 1) {
        result += "[".concat(this.list[i][0], ", ").concat(this.list[i][1] + 1, ")");
      }

      return result;
    }
    /**
     * Prints out the list of ranges in the range list
     */

  }, {
    key: "print",
    value: function print() {
      console.log(this.get());
    }
  }]);

  return RangeListSortedRanges;
}();

exports["default"] = RangeListSortedRanges;
global.RangeListSortedRanges = RangeListSortedRanges;