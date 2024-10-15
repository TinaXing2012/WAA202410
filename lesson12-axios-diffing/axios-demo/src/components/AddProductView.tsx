import {ChangeEvent, FormEvent, useState} from "react";
import axios from 'axios';
import Product from "../types/Product";
import {addProduct} from '../apis/services/product.service';

type PropsType = {
    onAddNewProduct: (product: Product) => void;
}

export default function AddProductView({onAddNewProduct}: PropsType) {
    const [product, setProduct] = useState<Product>({id: 0, name: '', price: 0});

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const addNewProduct = async (e: FormEvent) => {
        e.preventDefault();
        const response =
            await addProduct(product);
        if(response.status === 200) {
            onAddNewProduct(response.data);
            setProduct({id: 0, name: '', price: 0});
        }
    }

    return (
        <>
            <form onSubmit={addNewProduct}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name"
                           className="form-control"
                           id="name"
                           placeholder="Enter Name"
                           name="name"
                           value={product.name}
                           onChange={inputChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number"
                           min={0}
                           className="form-control"
                           id="price"
                           placeholder="price"
                           name="price"
                           value={product.price}
                           onChange={inputChangeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );

}