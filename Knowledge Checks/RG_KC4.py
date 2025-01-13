# app.py

from flask import Flask, jsonify
from flask_restful import Resource, Api
import requests

app = Flask(__name__)
api = Api(app)

class WeatherAPI(Resource):
    def get(self):
        api_url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY"
        response = requests.get(api_url)
        weather_data = response.json()
        return jsonify(weather_data)

api.add_resource(WeatherAPI, '/weather')

if __name__ == '__main__':
    app.run(debug=True)
