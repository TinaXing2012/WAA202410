package com.example.cascadingdemo.service;

import com.example.cascadingdemo.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    Customer save(Customer customer);

    List<Customer> findAll();

    Optional<Customer> findById(int id);
}
