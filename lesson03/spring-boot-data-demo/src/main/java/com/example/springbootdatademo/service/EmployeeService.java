package com.example.springbootdatademo.service;


import com.example.springbootdatademo.model.Employee;

import java.util.List;

public interface EmployeeService {

    public void addEmplyee(Employee employee);

    public List<Employee> getAllEmployees();
}
