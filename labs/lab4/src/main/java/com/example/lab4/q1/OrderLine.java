package com.example.lab4.q1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderLine {

    @Id
    private int id;
    private int quantity;

    @ManyToOne
    private Product product;

}
