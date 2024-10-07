package com.example.springsecuritydemo1.controller;

import com.example.springsecuritydemo1.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @GetMapping("/products")
    public List<Product> getProducts(){
        return List.of(
                new Product(1, "HP", 99),
                new Product(2, "DELL", 199),
                new Product(3, "Apple", 299)
        );
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        return product;
    }
}
