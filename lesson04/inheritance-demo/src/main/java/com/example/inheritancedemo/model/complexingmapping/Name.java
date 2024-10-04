package com.example.inheritancedemo.model.complexingmapping;

import jakarta.persistence.Embeddable;

@Embeddable
public class Name {
    private String firstName;
    private String lastName;
}
