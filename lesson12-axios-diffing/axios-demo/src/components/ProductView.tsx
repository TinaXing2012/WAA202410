import axios from 'axios';
import {useEffect, useState} from "react";
import Product from "../types/Product";
import {getAll} from "../apis/services/product.service";

type PropsType = {
    products: Product[],
    onSetProduct: (products: Product[]) => void;
}
export default function ProductView({products, onSetProduct: setProducts}: PropsType) {


    useEffect(() => {
        getAll()
            .then(response => {
                setProducts(response.data);
            });
    }, []);
    return (
        <>
            <h2>Product List</h2>
            <ul>
                {
                    products.map(({id, name, price}) => <li key={id}>{id}, {name}, {price}</li>)
                }
            </ul>

        </>
    )
}