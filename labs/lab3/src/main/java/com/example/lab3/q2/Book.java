package com.example.lab3.q2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Book {

    @Id
    private int id;
    private String ISBN;
    private String title;

    @ManyToOne
    private Publisher publisher;

}
