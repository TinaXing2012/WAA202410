package com.example.springbootintro.controller;

import com.example.springbootintro.model.Product;
import com.example.springbootintro.model.Rectangle;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Spring Boot!";
    }

    @GetMapping("/product")
    public Product product() {
        Product p = Product.builder()
                .id(123)
                .price(99)
                .name("HP")
                .build();
        return p;
    }

    @GetMapping("/recetangle")
    public Rectangle rectangle() {
        var rect = new Rectangle(1.99, 3.88);
        rect.height();
        rect.width();
        return rect;
    }

}
