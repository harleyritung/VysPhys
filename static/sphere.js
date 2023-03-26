        // START JAVASCRIPT
        ;(function() {;
            async function __main__() {
                "use strict";
                var version = ["3.2", "glowscript"];
                Array.prototype.toString = function() { return __parsearray(this) };
                var scene = canvas();
                sphere();
            }
            ;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
            // END JAVASCRIPT