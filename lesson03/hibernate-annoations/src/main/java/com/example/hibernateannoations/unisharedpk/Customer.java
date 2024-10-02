package com.example.hibernateannoations.unisharedpk;

import jakarta.persistence.*;

//@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstname;
    private String lastname;

    @OneToOne(mappedBy = "customer")
    private Address address;
}
