// START JAVASCRIPT
;(function() {;
async function __main__() {
"use strict";
var version = ["3.2", "glowscript"];
Array.prototype.toString = function() { return __parsearray(this) };
var scene = canvas();

scene.width = 600
scene.height = 400
scene.autoscale=true
scene.center = vec(300,100, 10)
var running = true;

//create the floor
let floor = box({color:color.white});
floor.size = vec(600, 10, 50);
floor.pos = vec(300, 0, 0)

//set the variables and create cylinder object
var mass = 10; 
var acc = 10;
var rad = 5;
var v = acc["*"](rad)["**"](0.5)

var spinner = cylinder({color:color.purple, pos:vec(300, 200, 20), axis:vec(0, 1, 0), radius:rad});

//caption creation
scene.append_to_caption('time:  ')
var timetext = wtext({text:'{:1.2f}'.format(0)})

//function to set the labels
function setlabels(t) {
   timetext.text = '{:1.2f}'.format(t)
}

//create the function to move the object
async function f(obj) {
    let t = clock();
    var tinitial = clock();
    while(true) {
        await rate(100);
        if (running){
            t = clock()["-"](tinitial);
            if (t[">"](t_tot)) break;
            
            }
        }
    }}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
