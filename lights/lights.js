$getScript("huejs.js")
var bridge;

(function(ext) {

    //Cleanup function when the extension is unloaded
    
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardward, plugin or unsupported browser
    
    ext._getStatus = function() {

        bridge = HueJS({
            ipAddress: "10.180.30.178";
        });

        return {status: 2, msg: 'Ready'};
    };

    ext.turn_onOff = function(direction, light) {

        if (direction == 'on') {

            bridge.turnOn(light);

        } else {

            bridge.turnOff(light);

        }
    };

    ext.set_color = function(light, color) {

        if (color == 'white') {
            bridge.setXY(light, 0.3227, 0.329);
        } else if (color == 'red') {
            bridge.setXY(light, 0.7, 0.2986);
        } else if (color == 'blue') {
            bridge.setXY(light, 0.139, 0.081);
        } else if (color == 'green') {
            bridge.setXY(light, 0.214, 0.709);
        } else if (color == 'yellow') {
            bridge.setXY(light, 0.4432, 0.5154);
        } else if (color == 'purple') {
            bridge.setXY(light, 0.2725, 0.1096);
        }

    };

    // Block and block menu descriptions
    
    var descriptor = {

        blocks: [
            
            // Block type, block name, function name, param 1, etc.

            [' ', 'turn %m.onOff light %n', 'turn_onOff', 'on', 1],
            [' ', 'set light %n to color %m.color', 'set_color', 1, 'white'],

        ],

        menus: {
            onOff: ['on', 'off'],
            color: ['white', 'red', 'blue', 'green', 'purple', 'yellow']
        },
    };


    // Resgister the extension
    
    ScratchExtensions.register('Scratch the lights', descriptor, ext);

})({});


