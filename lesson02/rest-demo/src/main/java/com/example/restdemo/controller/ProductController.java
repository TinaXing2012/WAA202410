package com.example.restdemo.controller;

import com.example.restdemo.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    //    Content Negotiation versioning - Github
    @GetMapping(value = "/products", produces = "application/v1+json")
    public List<Product> getProductsC1() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(1, "HP", 299, 10));
        products.add(new Product(2, "Dell", 399, 30));
        return products;
    }

    @GetMapping(value = "/products", produces = "application/v2+json")
    public List<Product> getProductsC2() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(3, "Apple", 499, 10));
        products.add(new Product(4, "Acer", 599, 30));
        return products;
    }

    //    customer header - microsoft
    @GetMapping(value = "/products", headers = "MIU-VERSION=1")
    public List<Product> getProductsCH1() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(1, "HP", 299, 10));
        products.add(new Product(2, "Dell", 399, 30));
        return products;
    }

    @GetMapping(value = "/products", headers = "MIU-VERSION=2")
    public List<Product> getProductsCH2() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(3, "Apple", 499, 10));
        products.add(new Product(4, "Acer", 599, 30));
        return products;
    }

    //    URI Versioning
    @GetMapping(value = "/v1/products")
    public List<Product> getProductsU1() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(1, "HP", 299, 10));
        products.add(new Product(2, "Dell", 399, 30));
        return products;
    }

    @GetMapping(value = "/v2/products")
    public List<Product> getProductsU2() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(3, "Apple", 499, 10));
        products.add(new Product(4, "Acer", 599, 30));
        return products;
    }

    //    Request Params
    @GetMapping(value = "/products", params = "version=1")
    public List<Product> getProductsP1() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(1, "HP", 299, 10));
        products.add(new Product(2, "Dell", 399, 30));
        return products;
    }

    @GetMapping(value = "/products", params = "version=2")
    public List<Product> getProductsP2() {
        List<Product> products = new ArrayList<Product>();
        products.add(new Product(3, "Apple", 499, 10));
        products.add(new Product(4, "Acer", 599, 30));
        return products;
    }

}
