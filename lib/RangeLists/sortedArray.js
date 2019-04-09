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

var RangeListSortedArray =
/*#__PURE__*/
function () {
  function RangeListSortedArray() {
    _classCallCheck(this, RangeListSortedArray);

    this.list = [];
  }

  _createClass(RangeListSortedArray, [{
    key: "sortedIndex",
    value: function sortedIndex(value) {
      // binary search
      var low = 0;
      var high = this.list.length;

      while (low < high) {
        var mid = low + high >>> 1;
        if (this.list[mid] < value) low = mid + 1;else high = mid;
      }

      return low;
    }
  }, {
    key: "fillRange",
    value: function fillRange(startIdx, endIdx) {
      // fill in array using start and end numbers
      return _toConsumableArray(Array(endIdx - startIdx)).map(function (item, i) {
        return startIdx + i;
      });
    }
    /**
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */

  }, {
    key: "add",
    value: function add(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          startIdx = _ref2[0],
          endIdx = _ref2[1];

      // this approach (slice + concat) is faster than `splice`
      this.list = [].concat(_toConsumableArray(this.list.slice(0, this.sortedIndex(startIdx))), _toConsumableArray(this.fillRange(startIdx, endIdx)), _toConsumableArray(this.list.slice(this.sortedIndex(endIdx - 1))));
    }
    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */

  }, {
    key: "remove",
    value: function remove(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          startIdx = _ref4[0],
          endIdx = _ref4[1];

      // this approach (slice + concat) is faster than `splice`
      this.list = [].concat(_toConsumableArray(this.list.slice(0, this.sortedIndex(startIdx))), _toConsumableArray(this.list.slice(this.sortedIndex(endIdx))));
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

      var prevItem = this.list[0];
      var rangeStartedAt = prevItem;
      var i;

      for (i = 1; i < length; i += 1) {
        var currentItem = this.list[i];

        if (currentItem - prevItem > 1) {
          result += "[".concat(rangeStartedAt, ", ").concat(prevItem + 1, ")");
          rangeStartedAt = currentItem;
        }

        prevItem = currentItem;
      }

      result += "[".concat(rangeStartedAt, ", ").concat(prevItem + 1, ")");
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

  return RangeListSortedArray;
}();

exports["default"] = RangeListSortedArray;
global.RangeListSortedArray = RangeListSortedArray;