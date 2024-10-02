package com.example.hibernateannoations.manyuni;

import jakarta.persistence.*;

import java.util.List;

//@Entity
public class Customer {

    @Id
    private int id;
    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String lastName;

    @ManyToMany(mappedBy = "customers")
    private List<SalesPerson> salesPeople;
}
