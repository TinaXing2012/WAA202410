package com.example.inheritancedemo.model;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "account_type")
public abstract class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;
    private long number;
    private double balance;

    public Account(long number, double balance) {
        this.number = number;
        this.balance = balance;
    }

    public Account(long id, long number, double balance) {
        this.id = id;
        this.number = number;
        this.balance = balance;
    }
}
