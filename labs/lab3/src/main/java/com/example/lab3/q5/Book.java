package com.example.lab3.q5;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;


@Entity
public class Book {

    @Id
    private int id;
    private String ISBN;
    private String title;

    @OneToOne
    private Author author;

}
