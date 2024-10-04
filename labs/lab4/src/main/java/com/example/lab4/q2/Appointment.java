package com.example.lab4.q2;

import jakarta.persistence.*;

@Entity
public class Appointment {

    @Id
    private Long id;
    private String appdate;

    @ManyToOne
    @JoinColumn(name = "patient")
    private Patient patient;

    @Embedded
    private Payment payment;

    @ManyToOne
    @JoinColumn(name = "doctor")
    private Doctor doctor;

}
