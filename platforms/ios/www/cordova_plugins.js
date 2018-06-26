cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.rjfun.cordova.httpd.CorHttpd",
    "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
    "pluginId": "com.rjfun.cordova.httpd",
    "clobbers": [
      "cordova.plugins.CorHttpd"
    ]
  },
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-game-center.GameCenter",
    "file": "plugins/cordova-plugin-game-center/www/gamecenter.js",
    "pluginId": "cordova-plugin-game-center",
    "clobbers": [
      "gamecenter"
    ]
  },
  {
    "id": "cordova-plugin-low-power-mode.LowPowerMode",
    "file": "plugins/cordova-plugin-low-power-mode/www/LowPowerMode.js",
    "pluginId": "cordova-plugin-low-power-mode",
    "clobbers": [
      "cordova.plugins.LowPowerMode"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-wkwebview-engine",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
    "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
    "pluginId": "cordova-plugin-wkwebview-engine",
    "clobbers": [
      "window.WkWebView"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.rjfun.cordova.httpd": "0.9.2",
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro": "2.31.6",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-game-center": "0.4.2",
  "cordova-plugin-low-power-mode": "0.0.1",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-wkwebview-engine": "1.1.4"
};
// BOTTOM OF METADATA
});