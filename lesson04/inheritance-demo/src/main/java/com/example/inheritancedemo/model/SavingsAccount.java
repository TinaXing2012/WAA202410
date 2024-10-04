package com.example.inheritancedemo.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class SavingsAccount extends Account {

    private double APY;

    public SavingsAccount(long number, double balance, double APY) {
        super(number, balance);
        this.APY = APY;
    }

    public SavingsAccount(long id, long number, double balance, double APY) {
        super(id, number, balance);
        this.APY = APY;
    }
}
