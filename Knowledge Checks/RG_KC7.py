# app.py

from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func, desc
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/products')
def get_products():
    products = Product.query.order_by(desc(Product.created_at)).all()
    return jsonify([{
        'id': product.id,
        'name': product.name,
        'created_at': product.created_at.isoformat()
    } for product in products])

@app.route('/products/search', methods=['POST'])
def search_products():
    query = request.json.get('query')
    products = Product.query.filter(Product.name.ilike(f'%{query}%')).all()
    return jsonify([{
        'id': product.id,
        'name': product.name,
        'created_at': product.created_at.isoformat()
    } for product in products])
