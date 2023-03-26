// START JAVASCRIPT

//modified version based on the code at https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/BinaryStar-VPython/edit
;(function() {;
async function __main__() {
"use strict";
var version = ["3.2", "glowscript"];
Array.prototype.toString = function() { return __parsearray(this) };
var scene = canvas();
scene.forward = vector(0,.3["-u"](),1["-u"]())

var G = 6.7e-11 // Newton gravitational constant

var m1 = 10e11;
var m2 = 2e11;
var r = 2e11;

var giant = sphere({pos:vec(1e11["-u"](),0,0), radius:2e10, color:color.red, make_trail:true, trail_type:'points', interval:10, retain:50})

var m1vec = vec(0,0,m1);
var p1 = vec(0, 0, m1)["*"](m1);

var dwarf = sphere({pos:vector(r["+"](1e11["-u"]()),0,0), radius:m2["/"](m1)["*"](2e10), color:color.yellow, make_trail:true, interval:10, retain:50});
var m2vec = vec(0,0,m2);
var p2 = p1["-u"]();
async function f(s1, s2) {
    var dt = 1e-5;
    while (true) {
        await rate(200);
        var rvec = dwarf.pos["-"](giant.pos)
        var F = G["*"](m1)["*"](m2)["*"](rvec.hat)["/"](r["**"](2));
        p1 = p1["+"](F["*"](dt));
        p2 = p2["-"](F["*"](dt));
        giant.pos = giant.pos["+"](p1["/"](m1)["*"](dt));
        dwarf.pos = dwarf.pos["+"](p2["/"](m2)["*"](dt));
    }
}
let t2 = await f(giant, dwarf);
}
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT