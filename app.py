from flask import Flask, render_template, request, redirect, url_for
import math

if __name__ == "__main__":
    app.run(port=8000, debug=True)

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    equation = ""
    if request.method == 'POST':
        equation = request.form.get('equation')
        if equation == "1D Motion":
            return redirect(url_for('oneDMotion'))
        elif equation == "2D Motion":
            return redirect(url_for('twoDMotion'))
    return render_template('index.html')

@app.route("/1DMotion", methods=['GET', 'POST'])
def oneDMotion():
    acceleration = 10
    velocity = 5
    position = 1
    if request.method == 'POST':
        acceleration = request.form.get("acceleration")
        velocity = request.form.get("velocity")
        position = request.form.get("position")
    return render_template('1dMotion.html', a = acceleration, v = velocity, x = position)

@app.route("/2DMotion", methods=['GET', 'POST'])
def twoDMotion():
    angle = math.pi / 2
    velocity = 80
    xposition = 20
    yposition = 10
    if request.method == 'POST':
        velocity = request.form.get("velocity")
        angle = request.form.get("angle")
        xposition = request.form.get("xposition")
        yposition = request.form.get("yposition")
    return render_template('2dMotion.html', angle = angle, v = velocity, x = xposition, y = yposition)

# @app.route("/centrpetalVelocity", methods=['GET', 'POST'])
# def oneDMotion():
#     acceleration = 10
#     velocity = 5
#     position = 1
#     if request.method == 'POST':
#         radius = request.form.get("radius")
#         period = request.form.get("period")
#         mass = request.form.get("mass")
#     return render_template('centripetalVelocty.html', r = radius, T = period, m = mass)