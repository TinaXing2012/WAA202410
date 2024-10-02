package com.example.hibernateannoations.twoonetomany;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Student {

    @Id
    private int id;

    private String fname;
    private String lname;
    private String major;

    @OneToMany(mappedBy = "student")
//    @JoinColumn(name = "student_id")
    private List<StudentCourseGrade> grades;
}
