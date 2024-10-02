package com.example.hibernateannoations.model;

import jakarta.persistence.*;

import java.util.List;

//@Entity
public class Customer {
    @Id
    private int id;
    private String firstname;
    private String lastname;

    @OneToMany
//    @JoinTable(name = "cust_car",
//        joinColumns = @JoinColumn(name = "cust_id"),
//            inverseJoinColumns = @JoinColumn(name = "car_id")
//    )
    @JoinColumn(name = "cust_id")
    private List<Car> cars;
}
