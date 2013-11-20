$ git clone https://github.com/apache/cordova-docs.git
$ cd cordova-docs/

$ npm install
$ npm run doc

=> cloning https://github.com/apache/cordova-plugin-file.git
=> cloning https://github.com/apache/cordova-plugin-geolocation.git
=> pulling https://github.com/apache/cordova-android.git
=> pulling https://github.com/apache/cordova-ios.git

=> mkdir build/doc/

=> cd tmp/cordova-android && npm run doc
=> mv tmp/cordova-android/build/doc/ build/doc/cordova-android/

$ cat package.json
{
  "name": "Cordova Documentation",
  "version": "3.2.0",
  "dev-dependencies": {
    "nodoc": "0.0.1",
    "nodoc-dotnet": "0.0.1",
    "nodoc-javadoc": "0.0.1",
    "nodoc-jsdoc": "0.0.1",
    "nodoc-markdown": "0.0.1",
    "nodoc-objc": "0.0.1"
  },
  "directories": {
    "doc": "doc"
  },
  "scripts": {
    "doc": "nodoc --dotnet src/window"
  },
  "config": {
    "nodoc": {
      "collection": {
        "cordova-plugin-file": "https://github.com/apache/cordova-plugin-file.git"
      }
      "dotnet": "src/windows",
      "javadoc": "src/android"
    },
    "nodoc-collection": {
      "cordova-plugin-file": "https://github.com/apache/cordova-plugin-file.git"
    }
  }
}

$ ./node_modules/.bin/nodoc --objc
