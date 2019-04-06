"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bitset = _interopRequireDefault(require("bitset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RangeList =
/*#__PURE__*/
function () {
  function RangeList() {
    _classCallCheck(this, RangeList);

    this.list = new _bitset["default"]();
  }
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */


  _createClass(RangeList, [{
    key: "add",
    value: function add(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          startIdx = _ref2[0],
          endIdx = _ref2[1];

      this.list.setRange(startIdx, endIdx - 1, 1);
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

      this.list.setRange(startIdx, endIdx - 1, 0);
    }
    /**
     * Get a list of ranges
     * @returns {Array.<Array.<number>>} result - Array of ranges
     */

  }, {
    key: "get",
    value: function get() {
      var result = [];
      var theMostSignificantBitIdx = this.list.msb();
      var currentBitIdx = this.list.lsb();
      var prevBitIsSet = true;
      var rangeStartedAt = currentBitIdx;

      while (currentBitIdx <= theMostSignificantBitIdx) {
        var currentBitIsSet = this.list.get(currentBitIdx);

        if (!prevBitIsSet && currentBitIsSet) {
          rangeStartedAt = currentBitIdx;
        }

        if (!currentBitIsSet && prevBitIsSet) {
          result.push([rangeStartedAt, currentBitIdx]);
        }

        prevBitIsSet = currentBitIsSet;
        currentBitIdx += 1;
      }

      result.push([rangeStartedAt, currentBitIdx]);
      return result;
    }
    /**
     * Prints out the list of ranges in the range list
     */

  }, {
    key: "print",
    value: function print() {
      console.log("[".concat(this.get().join(') ['), ")"));
    }
  }]);

  return RangeList;
}();

exports["default"] = RangeList;
global.RangeList = RangeList;