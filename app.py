from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    equation = ""
    if request.method == 'POST':
        equation = request.form.get('equation')
        if equation == "1D Motion":
            return redirect(url_for('oneDMotion'))
        elif equation == "2D Motion":
            print(request.values)
            print(request.form.get("acceleration"))
            print(request.form.get("velocity"))
            print(request.form.get("position"))
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