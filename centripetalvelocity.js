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
var acc = 10;
var rad = 5;
var T = 10;
var v = 2["*"](pi)["*"](rad)["/"](T);

//the angular velocity used for the rotatio
var av = v["/"](rad);

var spinner = cylinder({color:color.purple, pos:vec(300, 200, 0), axis:vec(0, 0, 1), radius:rad});
spinner.radius = rad["*"](10);
spinner.length = 5;

var center = sphere({color:color.white, pos:vec(300,200, 5), radius:3});

var forcearrow = arrow({color:color.white, pos:vec(300, 200["+"](spinner.radius), 5), radius:3, axis:vec(0,1, 0)});
forcearrow.length = 10["*"](v);
forcearrow.rotate({angle:pi["/"](2), axis:vec(0,0, 1), origin:vec(300, 200["+"](spinner.radius), 5)});

//caption creation
scene.append_to_caption('time:  ');
var timetext = wtext({text:'{:1.2f}'.format(0)})

//function to set the labels
function setlabels(t) {
   timetext.text = '{:1.2f}'.format(t)
}

//create the function to move the object
var dt = 0.01
async function f(obj, arrowval) {
    let t = clock();
    var tinitial = clock();
    while(true) {
        await rate(100);
        if (running){
            t = clock()["-"](tinitial);
            obj.rotate({angle:av["*"](dt), axis:vec(0,0,1)});
            forcearrow.rotate({angle:av["*"](dt), axis:vec(0,0,1), origin:vec(300 ,200, 5)})
            setlabels(t)
            }
        }
    }
let t2 = await f(spinner, forcearrow);}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT




