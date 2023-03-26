// START JAVASCRIPT
;(function() {;
async function __main__() {
"use strict";
var version = ["3.2", "glowscript"];
Array.prototype.toString = function() { return __parsearray(this) };
var scene = canvas();

scene.width = 600
scene.height = 200
scene.autoscale=true
scene.center = vec(300,100, 10)
var running = true;
    
//button({text:"Pause", pos:scene.title_anchor, bind:Run});

//define the object that will be moving
let object = box({color:color.cyan});
object.size = vec(10,10,10);

//user defined variables 
var acc = vec(10, 0, 0);
var t_tot = 20;
var v0 = vec(1, 0, 0);
var xval = vec(1, 50, 10);

// other variables

async function plot(obj) {
    
}

//caption creation
scene.append_to_caption('time:  ')
var timetext = wtext({text:'{:1.2f}'.format(0)})
scene.append_to_caption('\n x value:  ')
var xloc = wtext({text:'{:1.2f}'.format(xval.x)})

function setlabels(t, obj) {
   timetext.text = '{:1.2f}'.format(t)
   xloc.text = '{:1.2f}'.format(obj.pos.x)
}

object.pos = xval;
var dt = 0.05;
async function f(obj) {
    let t = clock();
    var tinitial = clock();
    //todo: make this update
    
    while (true) {
        await rate(100);
        
        if (running){
            //set time
            t = clock()["-"](tinitial);
            if(t[">"](t_tot)) break;
            if ((570["<="](object.pos.x)) && (object.pos.x["<="](600))) {
                tinitial = clock();
            }
            obj.pos = acc["*"](t["**"](2))["+"](v0["*"](t))["+"](xval);
            setlabels(t, obj)
            
        
        }
    }
}
let t2 = await f(object);

}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT