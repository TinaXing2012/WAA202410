package com.example.hibernateannoations.model;

import jakarta.persistence.*;

import java.time.LocalDate;

//@Entity
//@Table(name = "emps")

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "fname", nullable = false, length = 50)
    private String firstName;

    private String lastName;
    @Column(name = "birthdate")
    private LocalDate dateOfBirth;

    @Lob
    private String image;

    @Transient
    private int age;
}
