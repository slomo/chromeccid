chrome.app.runtime.onLaunched.addListener(function() {

  chrome.usb.getDevices({
    filters: [ { vendorId: 0x1050 } ]
  }, function(devices) {
    console.log('devices: ' + devices + " number of devices: " + devices.length)
    chrome.usb.openDevice(
      devices[0],
      function(connectionHandle) {
        console.dir("connection handle: " + connectionHandle)
        if (!connectionHandle) {
          console.log("error while open device: " + chrome.runtime.lastError.message)
        } else {
          chrome.usb.listInterfaces(connectionHandle, function(interfaces) {
            console.dir(interfaces);
          })
        }
      });
  })

  // chrome.app.window.create('window.html', {
  //   'bounds': {
  //     'width': 400,
  //     'height': 500
  //   }
  // });

  chrome.usb.findDevices({ vendorId: 0x1050, productId: 0x404 },
                         function(handles) {
                           console.log("Found handles: " + handles + " number of handles: " + handles.lenght);
                           if (chrome.runtime.lastError) {
                             console.log("error while finding devices: " + chrome.runtime.lastError.message)
                           }

                         })

});
