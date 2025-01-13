# app.py

from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db'
db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/scrape')
def scrape():
    # Basic web scraping function
    url = "https://example.com/products"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    products = []
    # Extract product information
    # Store data in database
    db.session.add_all(products)
    db.session.commit()
    return "Scraped products"

if __name__ == '__main__':
    app.run(debug=True)
