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

//user defined variables 
var m = 10;
var v = 0; // angle between force and displacement
var g = 1["-u"]();
var a = g;
var h = 20;
var t_tot = 20;
var v0vec = vec(0, v, 0);
var v0 = v;
var startval = vec(300, 200["+"](h), 0);
var accvec = vec(0, a, 0);

// other variables
var pe = m["*"](g)["*"](h)["-u"]();
var ke = m["*"](v["**"](2));
var te = pe["+"](ke);

var lenval = te["/"](m)["/"](abs(a));

//define the object that will be moving
let kebox = box({color:color.green, make_trail:true});
kebox.size = vec(ke["/"](10), 5, 5);
kebox.pos = vec(100, 40, 0);
let kelabel = label({pos:kebox.pos , xoffset:5["-u"](), yoffset:5, text:'Kinetic Energy:', line:false})

let pebox = box({color:color.red, make_trail:true});
pebox.size = vec(pe["/"](10), 5, 5);
pebox.pos = vec(50, 40["-u"](), 0);
let pelabel = label({pos:pebox.pos , xoffset:5["-u"](), yoffset:5, text:'Potential Energy:', line:false})

//define the object in motion
let object = box({color:color.cyan});
object.size = vec(10,10,10);
object.pos = vec(300, 300["+"](h), 100);

//height scale
let heightbox = box({color:color.white})
heightbox.pos = vec(270, 200["-"](lenval["/"](2)), 100);
heightbox.size = vec(5, lenval, 5);

//caption creation
scene.append_to_caption('time:  ');
var timetext = wtext({text:'{:1.2f}'.format(0)});
scene.append_to_caption('\n potential energy:  ');
var petext = wtext({text:'{:1.2f}'.format(pe)});
scene.append_to_caption('\n kinetic energy:  ');
var ketext = wtext({text:'{:1.2f}'.format(ke)});

function setlabels(t, d, w) {
   timetext.text = '{:1.2f}'.format(t);
   petext.text = '{:1.2f}'.format(d);
   ketext.text = '{:1.2f}'.format(w);
}


object.pos = startval;

var dt = 0.01;
async function f(obj) {
    let t = clock();
    var tinitial = clock();
    
    while (true) {
        await rate(100);
        
        if (running){
            //set time
            //if () {
            //    tinitial = clock();
            //}
            v0vec = v0vec["+"](accvec["*"](dt));
            obj.pos = obj.pos["+"](v0vec["*"](dt));
            v = v0vec.y;
            if (0.0[">="](pevec)) {
                //accvec = vec(0, -1, 0);
                v0vec = vec(0, sqrt(te["/"](m)), 0);
                startval = vec(300, 200, 10);
                pevec = 0.0;
                kevec = te;
            }
            if (0.0[">="](kevec)) {
                //accvec = vec(0, 1, 0);
                v0vec = vec(0, 0 ,0);
                startval = vec(300, 200["+"](lenval), 10);
                kevec = 0.0;
                pevec = te;
            }
            var kevec = m["*"](v["**"](2));
            var pevec = te["-"](kevec);
            //ke = mkevec);
            //pe = (mag(pevec)) - 200;
            kebox.size = vec(kevec, 5, 5);
            pebox.size = vec(pevec, 5, 5);
            setlabels(t, pevec, kevec);
            t = t["+"](dt);
        }
    }
}
let t2 = await f(object);

}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT