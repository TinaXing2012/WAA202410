package com.example.lab4.q1;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "`order`")
public class Order {

    @Id
    private int orderid;
    private LocalDate date;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<OrderLine> orderLineList;

    @ManyToOne
    @JoinTable(name = "customer_order",
            joinColumns = @JoinColumn(name = "orderid"),
            inverseJoinColumns = @JoinColumn(name = "cust_id"))
    private Customer customer;
}
