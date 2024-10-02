package com.example.hibernateannoations.onetomanybi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.List;

//@Entity
public class Person {

    @Id
    private int id;

    private String firstname;
    private String lastname;

    @OneToMany(mappedBy = "owner")
    private List<Car> cars;
}
