package com.example.springdatademo.controller;

import com.example.springdatademo.model.Department;
import com.example.springdatademo.model.User;
import com.example.springdatademo.repository.DeptarmentRepository;
import com.example.springdatademo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DeptarmentRepository deptarmentRepository;

    @PostMapping("/users")
    public void createUser(@RequestBody User user) {
        int deptId = user.getDept().getId();
        if(deptId != 0) {
            Department dept = deptarmentRepository.findById(deptId).get();
            user.setDept(dept);
            userRepository.save(user);
        } else {
            userRepository.save(user);
        }
    }

    @GetMapping("/users")
    public List<User> getAllUsers(@RequestParam(required = true) String deptname) {
        return userRepository.findByDeptName(deptname);
    }

    @GetMapping("/users/{firstname}")
    public List<User> getUser(@PathVariable String firstname) {
        return userRepository.listByNames3(firstname);
    }

}
