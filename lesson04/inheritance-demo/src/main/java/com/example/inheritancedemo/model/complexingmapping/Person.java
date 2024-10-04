package com.example.inheritancedemo.model.complexingmapping;

import jakarta.persistence.*;

//@Entity
public class Person {
    @Id
    private int id;
    private String firstname;
    private String lastname;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name="street", column = @Column(name = "ship_street")),
            @AttributeOverride(name="city", column = @Column(name = "ship_city")),
            @AttributeOverride(name="state", column = @Column(name = "ship_state")),
            @AttributeOverride(name="zip", column = @Column(name = "ship_zip"))
    })
    private Address shippingAddress;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name="street", column = @Column(name = "billing_street")),
            @AttributeOverride(name="city", column = @Column(name = "billing_city")),
            @AttributeOverride(name="state", column = @Column(name = "billing_state")),
            @AttributeOverride(name="zip", column = @Column(name = "billing_zip"))
    })
    private Address billingAddress;
}
