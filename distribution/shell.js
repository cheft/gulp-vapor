'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _child_process = require('child_process');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shell = function () {
    function Shell() {
        _classCallCheck(this, Shell);
    }

    _createClass(Shell, [{
        key: 'exec',
        value: function exec(command, callback) {
            return (0, _child_process.exec)(command, callback);
        }
    }, {
        key: 'spawn',
        value: function spawn(command, callback) {
            var proc = (0, _child_process.spawn)(command);
            callback(proc);

            return proc;
        }
    }]);

    return Shell;
}();

exports.default = Shell;