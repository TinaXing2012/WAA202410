package com.example.springbootintro.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    private int id;
    private String name;
    private double price;
    private int quantity;
    private String description;
    private String category;
    private String image;
}
