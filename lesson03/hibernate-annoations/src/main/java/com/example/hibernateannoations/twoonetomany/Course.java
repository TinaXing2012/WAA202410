package com.example.hibernateannoations.twoonetomany;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Course {

    @Id
    private int id;
    private String name;

    @OneToMany(mappedBy = "course")
//    @JoinColumn(name = "course_id")
    private List<StudentCourseGrade> courseGrades = new ArrayList<>();

//    @ManyToMany(mappedBy = "courses")
//    private List<Student> students = new ArrayList<>();
}
