package com.example.lab3.q6;

import jakarta.persistence.*;


@Entity
public class Major {

    @Id
    private int id;
    private String majorName;

    @OneToOne(mappedBy = "major")
    private Student student;
}
