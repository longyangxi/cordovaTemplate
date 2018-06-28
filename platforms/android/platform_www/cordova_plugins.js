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
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-globalization.GlobalizationError",
    "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "window.GlobalizationError"
    ]
  },
  {
    "id": "cordova-plugin-globalization.globalization",
    "file": "plugins/cordova-plugin-globalization/www/globalization.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "navigator.globalization"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.mainHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
    "pluginId": "cordova-plugin-nativestorage",
    "clobbers": [
      "NativeStorage"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.LocalStorageHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-nativestorage.NativeStorageError",
    "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-apprate.AppRate",
    "file": "plugins/cordova-plugin-apprate/www/AppRate.js",
    "pluginId": "cordova-plugin-apprate",
    "clobbers": [
      "AppRate"
    ]
  },
  {
    "id": "cordova-plugin-apprate.locales",
    "file": "plugins/cordova-plugin-apprate/www/locales.js",
    "pluginId": "cordova-plugin-apprate",
    "runs": true
  },
  {
    "id": "cordova-plugin-apprate.storage",
    "file": "plugins/cordova-plugin-apprate/www/storage.js",
    "pluginId": "cordova-plugin-apprate",
    "runs": true
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
  "cordova-plugin-wkwebview-engine": "1.1.4",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-globalization": "1.11.0",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-nativestorage": "2.3.1",
  "cordova-plugin-apprate": "1.4.0"
};
// BOTTOM OF METADATA
});