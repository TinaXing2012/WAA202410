package com.example.lab3.q5;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Author {

    @Id
    private int id;
    private String firstName;
    private String lastName;


}
