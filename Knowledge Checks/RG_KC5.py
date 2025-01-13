# test_app.py

import pytest
from app import db, Product

@pytest.fixture
def test_client(app):
    return app.test_client()

def test_product_model(app):
    product = Product(name="Test Product")
    db.session.add(product)
    db.session.commit()
    assert product.name == "Test Product"

def test_scrape_functionality(test_client):
    response = test_client.get('/scrape')
    assert b'Y1:0' in response.data

def test_error_page(test_client):
    response = test_client.get('/error')
    assert b'Error Page Content' in response.data
