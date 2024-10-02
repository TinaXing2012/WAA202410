package com.example.hibernateannoations.model;

import jakarta.persistence.*;
import com.example.hibernateannoations.model.Customer;

//@Entity
public class Car {
    @Id
    private int id;
    private String year;
    private String model;
    private String maker;

}
