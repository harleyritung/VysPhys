# VysPhys
### HooHacks 2023 Project - Creates an animation of a physics problem given an equation. Intended to help students visualize what they are working on. 
### Team: Giovanni Cianciaruso, Riley Hartung, Sophia Walton.

## Inspiration
We were inspired by a project that we had done in high school physics - taking a specific physics problem and visualising it using python. This greatly increased the understanding of the problem for all the people in the class. However, it required knowledge of coding. Our goal with this project was to take this knowledge and the visualization power of computer science to allow users to create easy, specific visualizations of the problem they are given. 

The goal of the project is to visualize and simulate standard physics problems with varying variables to demonstrate a deeper understanding to students learning physics.

## What it does
Our webapp allows users to select a particular problem from a certain physics unit, add forces, and customize the coefficients. We then simulate the instance using python images we built. 

## How we built it
We used glowscript/vpython to simulate the physics and javascript/html to integrate these visualizations with the front end. Our project is served on Heroku with Flask.

hosted on https://vysphys.herokuapp.com/

## What's next for VysPhys
Finish implementing all functions/equations, word problem recognition with NLP.
