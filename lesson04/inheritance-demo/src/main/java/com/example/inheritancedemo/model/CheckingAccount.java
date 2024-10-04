package com.example.inheritancedemo.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class CheckingAccount extends Account {

    private double overdraftLimit;

    public CheckingAccount(long number, double balance, double overdraftLimit) {
        super(number, balance);
        this.overdraftLimit = overdraftLimit;
    }

    public CheckingAccount(long id, long number, double balance, double overdraftLimit) {
        super(id, number, balance);
        this.overdraftLimit = overdraftLimit;
    }
}
