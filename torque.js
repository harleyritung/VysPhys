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
var rad = 5;
var forces = [[1, 0, 1], [2, pi["/"](2), 2], [9, pi, 3], [4, pi["/"](4), 4], [5, 3["*"](pi)["/"](2), 5]];
var Arrows = [];
var mass = 1;

//the angular velocity used for the rotatio

var spinner = cylinder({color:color.purple, pos:vec(300, 200, 0), axis:vec(0, 0, 1), radius:rad});
spinner.radius = rad["*"](10);
spinner.length = 5;

var center = sphere({color:color.white, pos:vec(300,200, 5), radius:3});

//initialize the force arrows
var N = forces.length;
var fnetx = 0;
var fnety = 0;

        
//forces in list
for (var i=0; i["<"](N); i++) {
    if(forces[i] == null) continue;
    var Find = forces[i][0];
    var Theta_ind = forces[i][1];
    var label_ind = forces[i][2];
    //creates arrow shape
    var arrow2 = arrow({color:color.green, shaftwidth:5, headwidth:7.5});
    arrow2.pos = vec(300["+"](spinner.radius), 200, 5);
    arrow2.length = (50["*"](Find));
    arrow2.rotate({angle:Theta_ind, axis:vec(0,0,1), origin:spinner.pos});
    //print(arrow2.pos)
    Arrows.push( arrow2 );
            
    //update fnet calculations
    fnetx = fnetx["+"](Find["*"](cos(Theta_ind)));
    fnety = fnety["+"](Find["*"](sin(Theta_ind))); 
    }

//fnet arrow creation
var fnet = fnetx["**"](2)["+"](fnety["**"](2))["**"](0.5);
var fnetangle = atan(fnety["/"](fnetx));
var arrowt = arrow({color:color.red, shaftwidth:5, headwidth:7.5});
arrowt.pos = vec(300["+"](spinner.radius), 200, 5);
arrowt.length = (50["*"](fnet));
arrowt.rotate({angle:fnetangle, axis:vec(0,0,1), origin:spinner.pos});
Arrows.push( arrowt );
forces.push([fnet, fnetangle, 6]);

//find torque and angular velocity
var acc = fnet["/"](10);
var av = acc["/"](rad)["**"](0.5);

var arrowlen = 50["*"](mass)["*"](acc)["/"](rad);
var torquearrow = arrow({color:color.white, pos:vec(300, 200, 5), shaftwidth:3, headwitdth:5, axis:vec(0,1, 0)});
torquearrow.length = 50["*"](rad)["*"](fnet)["*"](sin(fnetangle));

//caption creation
//caption creation
scene.append_to_caption('time:  ');
var timetext = wtext({text:'{:1.2f}'.format(0)})
scene.append_to_caption('\n torque:  ');
var torquetext = wtext({text:'{:1.2f}'.format(arrowlen["/"](50))})

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
            arrowval.rotate({angle:av["*"](dt), axis:vec(0,0,1)});
            setlabels(t);
            }
        }
    }
let t2 = await f(spinner, torquearrow);}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
$("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT