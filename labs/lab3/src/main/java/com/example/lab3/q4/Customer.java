package com.example.lab3.q4;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Customer {

    @Id
    private int id;
    private String name;
    private String address;

    @OneToMany
    @JoinColumn(name = "customer_id")
    private List<Reservation> reservationList;
}
