import express from 'express';
import { productManager } from './ProductManager.js';

const app = express();
app.use(express.json());

// Devolver todos los productos o con un limite
// Ruta de prueba: http://localhost:8080/products?limit=1
app.get('/products', (req, res) => {
    const limit = Number(req.query.limit);
    limit? res.status(200).send(productManager.getProducts().slice(0, limit)) : res.status(200).send(productManager.getProducts()); 
});

// Devolver un producto por su id
// Ruta de prueba: http://localhost:8080/products/6
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    res.status(200).send(productManager.getProductById(id));
});

// Crear un producto
// Producto de prueba: http://localhost:8080/products/
/*
{
    "title": "PRUEBA PRUEBA",
    "description": "PRUEBA 12",
    "price": 7272727272,
    "status": true,
    "thumbnail": ["url1", "urlasdlasd", "aksdaklsd"],
    "code": "123123123123",
    "stock": 900
}
*/
app.post('/products', (req, res) => {
    const body = req.body;

    res.status(200).send(productManager.addProduct(body.title, body.description, body.price, body.status, body.thumbnail, body.code, body.stock));
});


app.listen(8080, () => {
    console.log('Server Up on port 8080');
});