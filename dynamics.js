JavaScript 3.2

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
object.size = vec(10,10,10);

//let floor = box({color:color.white});
//floor.size = vec(600, 10, 50);
//floor.pos = vec(300, 0, 0)

//user defined variables 
var mass = 1;
var forces = [[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4], [5,5,5]];
var arrows = [];

var N = forces.length
for (i=0; i<N; i++) {
    if(forces[i] == null) continue;
    var Find = forces[i][0];
    var Theta_ind = 
    }


//background variables
var accvec = vec(acc*cos(dir), acc*sin(dir), 0);
var t_tot = 20;
var v0 = 0;
var xinit = 0;
var yinit = 0;
var v0vec = vec(v0*cos(dir), v0*sin(dir), 0);
var startval = vec(0, 0, 10);


//caption creation
scene.append_to_caption('time:  ')
var timetext = wtext({text:'{:1.2f}'.format(0)})
scene.append_to_caption('\n x value:  ')
var xloc = wtext({text:'{:1.2f}'.format(startval.x)})
scene.append_to_caption('\n y value:  ')
var yloc = wtext({text:'{:1.2f}'.format(startval.y)})

function setlabels(t, obj) {
   timetext.text = '{:1.2f}'.format(t)
   xloc.text = '{:1.2f}'.format(obj.pos.x)
   yloc.text = '{:1.2f}'.format(obj.pos.y)
}

object.pos = startval;
var dt = 0.05;
async function f(obj) {
    let t = clock();
    var tinitial = clock();
    
    while (true) {
        await rate(100);
        
        if (running){
            //set time
            t = clock()-tinitial;
            if(t > t_tot) break;
            if (600 <= object.pos.x) {
                tinitial = clock();
            }
            if (obj.pos.x <= 0) {
                tinitial = clock();
            }
            if (obj.pos.y >= 400) {
                tinitial = clock();
            }
            if (obj.pos.y <=0) {
                tinitial = clock();
            }

            obj.pos = accvec*t**2 + v0vec*t + startval;
            setlabels(t, obj)
            
        
        }
    }
}
let t2 = await f(object);
