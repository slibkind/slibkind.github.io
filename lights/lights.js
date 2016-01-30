

(function(ext) {

    //Cleanup function when the extension is unloaded
    
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardward, plugin or unsupported browser
    
    ext._getStatus = function() {

        return {status: 2, msg: 'Ready'};
    };

    ext.myFirstBlock = function() {

    };

    // Block and block menu descriptions
    
    var descriptor = {

        blocks: [
            
            // Block type, block name, function name

            [' ', 'my first block', 'myFirstBlock'],



        ]
    };


    // Resgister the extension
    
    ScratchExtensions.register('Scratch the lights', descriptor, ext);

})({});


