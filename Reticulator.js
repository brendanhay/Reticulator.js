//     Reticulator.js 0.0.1
//     (c) 2010 Brendan Hay
//     Reticulator may be freely distributed under the MIT license.

define(function () {

    // Set your prefix, and list of phrases for each collection here
    var nonsense = {
        loading: {
            prefix: 'Please wait .. ',
            // Thanks to the MIT campus map and stackoverflow
            phrases: [
                "640K ought to be enough for anybody",
                "the architects are still drafting",
                "the bits are breeding",
                "we're building the buildings as fast as we can",
                "would you prefer chicken, steak, or tofu?",
                "pay no attention to the man behind the curtain",
                "and enjoy the elevator music",
                "while the little elves draw your map",
                "a few bits tried to escape, but we caught them",
                "and dream of faster computers",
                "would you like fries with that?",
                "checking the gravitational constant in your locale",
                "go ahead -- hold your breath",
                "at least you're not on hold",
                "hum something loud while others stare",
                "you're not in Kansas any more",
                "the server is powered by a lemon and two electrodes",
                "we love you just the way you are",
                "while a larger software vendor in Seattle takes over the world",
                "we're testing your patience",
                "as if you had any other choice",
                "take a moment to sign up for our lovely prizes",
                "don't think of purple hippos",
                "follow the white rabbit",
                "why don't you order a sandwich?",
                "while the satellite moves into position",
                "the bits are flowing slowly today",
                "dig on the 'X' for buried treasure... ARRR!",
                "it's still faster than you could draw it"
            ]
        },
        success: {
            prefix: 'Oh my .. ',
            phrases: [
                'great success!'
            ]
        },
        error: {
            prefix: 'Oh noes .. ',
            phrases: [
                'we have a problem!'
            ]
        }
    };

    // Generator instance for a specific collection of phrases
    function Generator(collection) {
        var previous = -1,
            prefix = collection.prefix,
            phrases = collection.phrases,
            length = phrases.length;

        return function () {
            var current;

            // Ensure we don't return the same phrase twice
            while (previous === (current = Math.floor(Math.random() * length)))
                ;

            // Prepend the prefix
            return prefix + phrases[previous = current];
        };
    };

    function Recitulator() {
        this.loading = new Generator(nonsense.loading);
        this.success = new Generator(nonsense.success);
        this.error = new Generator(nonsense.error);
    }
    
    return new Recitulator;

});