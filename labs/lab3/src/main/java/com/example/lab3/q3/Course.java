package com.example.lab3.q3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Course {

    @Id
    private int id;
    private String name;
    private String description;

    @ManyToMany
    private List<Student> studentList;
}
