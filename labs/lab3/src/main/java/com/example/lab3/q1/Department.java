package com.example.lab3.q1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import org.springframework.web.bind.annotation.BindParam;

import java.util.List;

@Entity
public class Department {

    @Id
    private int id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "department")
    private List<Employee> employeeList;
}
