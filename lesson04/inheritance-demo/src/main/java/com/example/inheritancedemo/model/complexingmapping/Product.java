package com.example.inheritancedemo.model.complexingmapping;

import jakarta.persistence.*;

//@Entity
////@SecondaryTable(name="warehouse")
//@SecondaryTables({
//        @SecondaryTable(name = "warehouse",
//                pkJoinColumns = @PrimaryKeyJoinColumn(name = "p_id", referencedColumnName = "id")),
//        @SecondaryTable(name= "stuff",
//                pkJoinColumns = @PrimaryKeyJoinColumn(name = "product_id", referencedColumnName = "id"))
//})
public class Product {

    @Id
    private int id;
    private String name;
    private double price;

    @Column(table = "warehouse")
    private boolean available;
    @Column(table = "warehouse")
    private int quantity;
    @Column(table = "stuff")
    private String description;
    @Column(table = "stuff")
    private String image;


}
