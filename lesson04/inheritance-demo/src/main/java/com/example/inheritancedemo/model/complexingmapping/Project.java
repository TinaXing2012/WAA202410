package com.example.inheritancedemo.model.complexingmapping;

import jakarta.persistence.*;

@Entity
public class Project {

    @Id
    private int id;
    private String name;
    private String description;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "c_fname", referencedColumnName = "firstName"),
            @JoinColumn(name = "c_lname", referencedColumnName = "lastName")
    })
    private Customer customer;
}
