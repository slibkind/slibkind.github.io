
(function(ext) {

    //Cleanup function when the extension is unloaded
    
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardward, plugin or unsupported browser
    
    ext._getStatus = function() {

        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
    };



    // Block and block menu descriptions
    
    var descriptor = {

        blocks: [
            
            // Block type, block name, function name, param 1, etc.

            [' ', 'my first block', 'my_first_block'],

        ],

    };


    // Resgister the extension
    
    ScratchExtensions.register('Scratch the lights', descriptor, ext);

})({});


