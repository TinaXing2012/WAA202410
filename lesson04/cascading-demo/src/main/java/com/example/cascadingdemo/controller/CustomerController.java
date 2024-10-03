package com.example.cascadingdemo.controller;

import com.example.cascadingdemo.model.CreditCard;
import com.example.cascadingdemo.model.Customer;
import com.example.cascadingdemo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
//        TODO: call service to save Customer
        System.out.println(customer);
        customer = customerService.save(customer);
        return customer;
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        List<Customer> customers = customerService.findAll();
        return customers;
    }

    @DeleteMapping("/{cid}/creditcards/{ccid}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable int cid, @PathVariable int ccid) {
        Optional<Customer> customerOptional = customerService.findById(cid);
        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            List<CreditCard> creditCards = customer.getCreditCards();
            creditCards.remove(ccid);
            customer = customerService.save(customer);
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
