"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RangeListPure =
/*#__PURE__*/
function () {
  function RangeListPure() {
    _classCallCheck(this, RangeListPure);

    this.list = [];
  }
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */


  _createClass(RangeListPure, [{
    key: "add",
    value: function add(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          startIdx = _ref2[0],
          endIdx = _ref2[1];

      // looping through the given range
      for (var i = startIdx; i < endIdx; i += 1) {
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

  }, {
    key: "remove",
    value: function remove(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          startIdx = _ref4[0],
          endIdx = _ref4[1];

      for (var i = startIdx; i < endIdx; i += 1) {
        if (this.list[i]) {
          this.list[i] = undefined;
        }
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
      var prevBitIsSet = false;
      var rangeStartedAt;
      var i;

      for (i = 0; i <= length; i += 1) {
        var currentBitIsSet = this.list[i];

        if ((!i || !prevBitIsSet) && currentBitIsSet) {
          rangeStartedAt = i;
        }

        if (!currentBitIsSet && prevBitIsSet) {
          result += "[".concat(rangeStartedAt, ", ").concat(i, ")");
        }

        prevBitIsSet = currentBitIsSet;
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

  return RangeListPure;
}();

exports["default"] = RangeListPure;
global.RangeListPure = RangeListPure;