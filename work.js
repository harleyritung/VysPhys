// START JAVASCRIPT
;(function() {;
async function __main__() {
"use strict";
var version = ["3.2", "glowscript"];
Array.prototype.toString = function() { return __parsearray(this) };
var scene = canvas();

//create the scene dimensions
scene.width = 600
scene.height = 400
scene.autoscale=true
scene.center = vec(300,100, 10)
var running = true;

function Run(b) {
    running = !running;
    //if (running) b.text = "Pause";
    //else b.text = "Run";
}
    
//button({text:"Pause", pos:scene.title_anchor, bind:Run});

//define the object that will be moving
let object = box({color:color.cyan, make_trail:true});
object.size = vec(100,100,100);


let workbox = box({color:color.green, make_trail:true});
workbox.size = vec(0, 10, 5);
workbox.pos = vec(250, 0, 0);
let Flabel = label({pos:workbox.pos , xoffset:20["-u"](), yoffset:20, text:'Work:', line:false})

//user defined variables 
var Force = 10;
var dir = 0; // angle between force and displacement
var displacement = 20;
var accvec = vec(Force["*"](cos(dir)), Force["*"](sin(dir)), 0);
var t_tot = 20;
var v0 = 0;
var v0vec = vec(0, 0, 0);
var startval = vec(300, 200, 0);

// other variables

async function plot(obj) {
    
}

//caption creation
scene.append_to_caption('time:  ')
var timetext = wtext({text:'{:1.2f}'.format(0)})
scene.append_to_caption('\n displacement:  ')
var disptext = wtext({text:'{:1.2f}'.format(0)})
scene.append_to_caption('\n work:  ')
var worktext = wtext({text:'{:1.2f}'.format(0)})

var workfinal = Force["*"](displacement)["*"](cos(dir))
scene.append_to_caption('\n work at final displacement:  ')
var workftext = wtext({text:'{:1.2f}'.format(workfinal)})

function setlabels(t, d, w) {
   timetext.text = '{:1.2f}'.format(t)
   disptext.text = '{:1.2f}'.format(d)
   worktext.text = '{:1.2f}'.format(w)
}

var d_c = 0;
var w_c = 0;

object.pos = startval;
async function f(obj) {
    let t = clock();
    var tinitial = clock();
    
    while (true) {
        await rate(100);
        
        if (running){
            //set time
            t = clock()["-"](tinitial);
            if(t[">"](t_tot)) break;
            if (d_c[">="](displacement)) {
                tinitial = clock();
                d_c = 0;
                w_c = 0
            }
            obj.pos = accvec["*"](t["**"](2))["+"](v0vec["*"](t))["+"](startval);
            var vecdis = obj.pos["-"](startval);
            //print(vecdis)
            d_c =mag(vecdis);
            //d_c = vecdis.length;
            print(d_c)
            w_c = Force["*"](d_c)["*"](cos(dir));
            workbox.pos = vec(4["*"](w_c), 0, 0);
            setlabels(t, d_c, w_c);
            
        
        }
    }
}
let t2 = await f(object);

}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT