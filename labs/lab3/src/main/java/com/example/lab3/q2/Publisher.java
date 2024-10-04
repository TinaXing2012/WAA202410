package com.example.lab3.q2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Publisher {

    @Id
    private int id;
    private String name;
    private String address;
}
