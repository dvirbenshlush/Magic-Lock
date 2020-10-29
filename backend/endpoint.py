from flask import Flask, request, send_file, jsonify
from files_utilities import read_from_file, read_from_image_file, read_from_json_file
from flask.wrappers import Response
from flask_cors import CORS

app = Flask('MagicLock')
CORS(app)

@app.route('/about_us')
def AboutUs():
    return {
        "data": read_from_file('about_us.txt')
    }

@app.route('/services')
def Services():
    data = read_from_json_file('services.json')
    key = request.args.get('key')
    if key in data:    
        return data[key]
    else:
        return("please enter valid value")

@app.route('/services_list_about_us')
def ServicesListAboutUs():
    data = read_from_json_file('backend/services.json')
    keys = []
    for key in data.keys():
        keys.append(key)
    return jsonify(keys) 

@app.route('/services_list_for_price_guide')
def ServicesListPriceGuide():
    
    data = read_from_json_file('/price_guide.json')
    keys = []
    for key in data.keys():
        keys.append(key)
    return jsonify(keys) 

@app.route('/price_guide')
def PriceGuide():
    data = read_from_json_file('backend/price_guide.json')
    key = request.args.get('key')
    if key in data:    
        return data[key]
    else:
        return("please enter valid value")

@app.route('/image_list')
def ImageList():
    images = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6']
    return jsonify(images)

@app.route('/get_image')
def GetImage():
    image = request.args.get('image')
    return send_file('backend/{}'.format(image) , mimetype='image/png')
