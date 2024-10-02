package com.example.hibernateannoations.onetomanybi;

import jakarta.persistence.*;

//@Entity
public class Car {

    @Id
    private int id;
    private String brand;
    private String model;
    private int year;

    @ManyToOne
    private Person owner;
}
