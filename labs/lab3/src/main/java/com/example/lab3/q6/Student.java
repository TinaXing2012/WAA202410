package com.example.lab3.q6;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToOne;

@Entity
public class Student {

    @Id
    private int id;
    private String name;

    @OneToOne
    private Major major;
}
