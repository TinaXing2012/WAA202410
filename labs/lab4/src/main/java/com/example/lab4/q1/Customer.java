package com.example.lab4.q1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Customer {

    @Id
    private int id;
    private String firstname;
    private String lastname;

    @OneToMany(mappedBy = "customer")
    private List<Order> orders;

}
