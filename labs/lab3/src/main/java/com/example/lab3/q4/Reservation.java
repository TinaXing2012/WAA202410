package com.example.lab3.q4;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Reservation {

    @Id
    private int id;
    private String date;
    private String time;

}
