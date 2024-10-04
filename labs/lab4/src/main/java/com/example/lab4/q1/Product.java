package com.example.lab4.q1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity
//@Inheritance(strategy = InheritanceType.JOINED)
public class Product {

    @Id
    private int id;
    private String name;
    private String description;

}
