from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        equation = request.form.get('equation')
        if equation == "1D Motion":
            print(request.values)
            print(request.form.get("acceleration"))
            print(request.form.get("velocity"))
            print(request.form.get("position"))
    return render_template('index.html', )