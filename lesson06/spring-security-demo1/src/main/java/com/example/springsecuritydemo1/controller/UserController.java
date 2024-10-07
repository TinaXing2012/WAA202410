package com.example.springsecuritydemo1.controller;

import com.example.springsecuritydemo1.model.User;
import com.example.springsecuritydemo1.repository.UserRepository;
import com.example.springsecuritydemo1.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        User u = new User();
        u.setFirstName("JJ");
        u.setLastName("JJ2");
        u.setEmail("jj");
        u.setPassword("dfadfadfadf");
        return u;
    }
}
