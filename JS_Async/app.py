import requests, json

from flask import Flask, render_template, jsonify, request, Response
app = Flask(__name__)

APIurl='https://api.openweathermap.org/data/2.5/weather?q={}&APPID=d89b5a8b884a3b2e69309acf18f5360a'
@app.route('/getData',methods=["GET"])
def index():
    city=request.args.get('city')
    print(APIurl.format(city))
    response = requests.get(APIurl.format(city))

    if dict(response.json())['cod'] != 200:
        result = Response(status=dict(response.json())['cod'])
        result.headers.add('Access-Control-Allow-Origin', '*')
        return result
    else:
        result = jsonify(response.json())
        result.headers.add('Access-Control-Allow-Origin', '*')

    return result

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8000, debug=True)
