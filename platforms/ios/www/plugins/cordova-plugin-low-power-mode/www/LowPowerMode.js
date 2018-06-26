cordova.define("cordova-plugin-low-power-mode.LowPowerMode", function(require, exports, module) {
var exec = require('cordova/exec');

exports.isLowPowerModeEnabled = function(callback) {
  exec(function(successResult) {
    callback({isLowPowerModeEnabled: successResult }, null);
  }, function(error) {
    callback(null, {message: "Device is not ready. Try again later."});
  }, "LowPowerMode", "isLowPowerModeEnabled", [""]);
};

});
