(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);

    var emptyObject = {};


    console.log("contents of 'ext' is: ");
    console.log(JSON.stringify(ext,null, 4));

    console.log("num of keys in 'ext' is: " + Object.keys(ext).length);

    console.log("contents of 'emptyObject' is: ");
    console.log(JSON.stringify(emptyObject,null, 4));

    console.log("num of keys in 'emptyObject' is: " + Object.keys(emptyObject).length);

    console.log("contents of 'descriptor' is: ");
    console.log(JSON.stringify(descriptor,null, 4));

})({});
