package com.example.restdemo.controller;

import com.example.restdemo.model.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//@Controller + @ResponseBody
@RestController
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public Student searchStudent(@RequestParam(name = "firstName", required = false) String firstName,
                                 @RequestParam(name = "lname") String lastName) {
        System.out.println(firstName + " " + lastName);
        return new Student(2, "Edward", "Smith", 20);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        System.out.println(student);
        return student;
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<Student> getStudentById(@PathVariable(name = "studentId") int id) {
        System.out.println(id);
        //sudo: search DB
        Student s = null;
        if(id == 2){
            s = new Student(2, "Edward", "Smith", 20);
        }

        if(s != null) {
//            return new ResponseEntity<>(s, HttpStatus.OK);
            return ResponseEntity
                    .ok()
                    .header("Content-Type", "application/json")
                    .body(s);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
