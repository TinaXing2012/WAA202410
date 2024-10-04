package com.example.inheritancedemo.model.complexingmapping;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Customer {
    @EmbeddedId
    private Name name;
    private String major;
    private double salary;

    @OneToMany(mappedBy = "customer")
    private List<Project> projects;
}
