package com.example.springdatademo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
//    private String deptName;

    @ManyToOne(cascade = CascadeType.ALL)
    private Department dept;
}
