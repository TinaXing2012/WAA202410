package com.example.inheritancedemo.controller;

import com.example.inheritancedemo.model.Account;
import com.example.inheritancedemo.model.CheckingAccount;
import com.example.inheritancedemo.model.SavingsAccount;
import com.example.inheritancedemo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/accounts")
    public ResponseEntity<Account> createAccount() {
        Account savingsAccount = new SavingsAccount(1111,100,0.88);
        accountRepository.save(savingsAccount);
        Account checkingAccount = new CheckingAccount(2222,200,200);
        Account savedAccount = accountRepository.save(checkingAccount);
        return ResponseEntity.noContent().build();
    }

}
