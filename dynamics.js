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
    let object = box({color:color.cyan});
    object.size = vec(100,100,100);
    
    //floor
    var floor_flag = true;
    let floor;
    if(floor_flag){
        floor = box({color:color.grey});
        floor.size = vec(800,10,500);
        floor.pos = vec(300,-100,0);
    }
    
    //user defined variables 
    var mass = 5;
    var forces = [[1, 0, 1], [2, pi["/"](2), 2], [9, pi, 3], [4, pi["/"](4), 4], [5, 3["*"](pi)["/"](2), 5]];
    var Arrows = [];
    
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
        arrow2.pos = obje
        
        ct.pos["+"](vec(50,50,0));
        arrow2.length = (50["*"](Find));
        arrow2.rotate({angle:Theta_ind, axis:vec(0,0,1), origin:object.pos});
        print(arrow2.pos)
        Arrows.push( arrow2 );
        
        //update fnet calculations
        fnetx = fnetx["+"](Find["*"](cos(Theta_ind)));
        fnety = fnety["+"](Find["*"](sin(Theta_ind))); 
        }
    
    //push fnet and the object to the list of objects
    var fnet = fnetx["**"](2)["+"](fnety["**"](2))["**"](0.5);
    var fnetangle = atan(fnety["/"](fnetx));
    var arrowt = arrow({color:color.red, shaftwidth:5, headwidth:7.5});
    arrowt.pos = object.pos["+"](vec(50, 50, 0));
    arrowt.length = (50["*"](fnet));
    print(arrowt.length)
    arrowt.rotate({angle:fnetangle, axis:vec(0,0,1), origin:object.pos});
    Arrows.push( arrowt );
    forces.push([fnet, fnetangle, 6]);
    
    
    //background variables
    var accvec = vec(fnetx["/"](mass), fnety["/"](mass), 0);
    var t_tot = 20;
    var v0 = 0;
    var xinit = 0;
    var yinit = 0;
    var v0vec = vec(0, 0, 0);
    var startval = vec(300, 100, 10);
    
    
    //caption creation
    scene.append_to_caption('time:  ')
    var timetext = wtext({text:'{:1.2f}'.format(0)})
    scene.append_to_caption('\n Fnet:  ')
    var fnetlab = wtext({text:'{:1.2f}'.format(fnet)})
    scene.append_to_caption('\n Theta:  ')
    var anglelab = wtext({text:'{:1.2f}'.format(fnetangle)})
    
    function setlabels(t, obj) {
       timetext.text = '{:1.2f}'.format(t)
       //xloc.text = '{:1.2f}'.format(obj.pos.x)
       //yloc.text = '{:1.2f}'.format(obj.pos.y)
    }
    
    object.pos = startval;
    var dt = 0.05;
    async function f(obj,thelist) {
        let t = clock();
        var tinitial = clock();
        var clockprev = clock();
        while (true) {
            await rate(100);
            if (running){
                t = clock()["-"](tinitial);
                
                //if total time is fully elapsed break
                if(t[">"](t_tot)) break;
                //if object comes into contact with floor break
                if(floor_flag)
                    if(obj.pos.y - 55 >= floor.pos.y) break;
    
                obj.pos = accvec["*"](t["**"](2))["+"](v0vec["*"](t))["+"](startval);
                for (i=0; i["<"](thelist.length); i++) {
                    //loop through the force arrows and find positions
                    var forcearrow = thelist[i];
                    var thepos = obj.pos
    
    
                    dt = t["-"](clockprev);
                    if (forcearrow) {
                        //update the positions of the arrows based on the position of the object
                        forcearrow.pos = obj.pos["+"](vec(50,0,0));
                        Theta_ind = forces[i][1];
                        Find = forces[i][0];
                        label_ind = forces[i][2];
                        forcearrow.length = (50["*"](Find));
                        thelist[i] = forcearrow;
                    }
                }
                
                //if (600 <= obj.pos.x) {
                //    tinitial = clock();
                //}
                //if (obj.pos.x <= 0) {
                //    tinitial = clock();
                //}
                //if (obj.pos.y >= 400) {
                //    tinitial = clock();
                //}
                //if (obj.pos.y <=0) {
                //    tinitial = clock();
                //}
                clockprev = t;
                setlabels(t, obj);       
            }
        }
    }
    let t2 = await f(object, Arrows);
    }
    ;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
    // END JAVASCRIPT
    