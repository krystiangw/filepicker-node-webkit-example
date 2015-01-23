
### Basic node-webkit + filepicker.js example

# What is node-webkit?

node-webkit is an app runtime based on Chromium and node.js. You can write native apps in HTML and JavaScript with node-webkit. It also lets you call Node.js modules directly from the DOM and enables a new way of writing native applications with all Web technologies.

# What is filepicker?

Cloud service for file uploading and managment. In example here, filepicker widget is used for file uploading. After user choose the file we receive file url (cloud hosted).

# Run:
  
```bash
$ /path/to/nw .  (suppose the current directory contains 'package.json')
```

Note: on Windows, you can drag the folder containing `package.json` to `nw.exe` to open it.

Note: on OSX, the executable binary is in a hidden directory within the .app file. To run node-webkit on OSX, type:
```bash
$ /path/to/node-webkit.app/Contents/MacOS/node-webkit .  (suppose the current directory contains 'package.json')
```
## Documents

For more information on how to write/package/run apps, see:

* [How to run apps](https://github.com/rogerwang/node-webkit/wiki/How-to-run-apps)
* [How to package and distribute your apps](https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps)
* [How to use Node.js modules in node-webkit](https://github.com/rogerwang/node-webkit/wiki/Using-Node-modules)


# More info

* [node-webkit on github](https://github.com/nwjs/nw.js)
