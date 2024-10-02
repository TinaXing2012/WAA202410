package com.example.hibernateannoations.manyuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import java.util.List;

//@Entity
//@Table(name = "salesperson")
public class SalesPerson {

    @Id
    private int id;
    private String alias;
    private String phoneNr;

    @ManyToMany
    private List<Customer> customers;
}
