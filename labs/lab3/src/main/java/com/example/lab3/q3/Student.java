package com.example.lab3.q3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Student {

    @Id
    private int id;
    private String name;
    private int age;
    private String gender;

    @ManyToMany(mappedBy = "studentList")
    private List<Course> courseList;
}
