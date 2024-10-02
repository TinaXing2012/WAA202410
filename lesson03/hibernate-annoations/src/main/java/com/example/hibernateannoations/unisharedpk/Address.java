package com.example.hibernateannoations.unisharedpk;

import jakarta.persistence.*;

//@Entity
public class Address {

    @Id
    private int id;
    private String street;
    private String city;
    private String state;

    @OneToOne
    private Customer customer;



}
