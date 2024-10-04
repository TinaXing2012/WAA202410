package com.example.lab4.q2;

import jakarta.persistence.Embeddable;

@Embeddable
public class Payment {
    private String paydate;
    private double amount;
}
