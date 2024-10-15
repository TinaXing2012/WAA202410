import ProductView from "./components/ProductView";
import AddProductView from "./components/AddProductView";
import {useState} from "react";
import Product from "./types/Product";

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    const addNewProduct = (product: Product) => {
        setProducts([...products, product]);
    }
    return (
        <div className="container">
            <ProductView products={products} onSetProduct={setProducts}/>
            <AddProductView onAddNewProduct={addNewProduct}/>
        </div>
    );
}

export default App;
