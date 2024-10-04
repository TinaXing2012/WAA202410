package com.example.lab3.q1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Employee {

    @Id
    private int id;
    private String name;
    private int age;
    private int salary;

    @ManyToOne
//    @JoinColumn(name = "dept_name")
    private Department department;
}
