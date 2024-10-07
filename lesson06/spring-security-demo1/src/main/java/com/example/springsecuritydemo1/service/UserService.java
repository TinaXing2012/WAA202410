package com.example.springsecuritydemo1.service;

import com.example.springsecuritydemo1.model.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    List<User> findAll();
}
