import http from '../axios-instance';
import Product from "../../types/Product";

export const getAll = () => {
    return http.get('/products');
}

export const addProduct = (product: Product) => {
    return http.post('/products', product);
}