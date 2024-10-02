package com.example.hibernateannoations.twoonetomany;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "grade")
public class StudentCourseGrade {

    @Id
    private int id;

    private int grade;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Course course;

}
