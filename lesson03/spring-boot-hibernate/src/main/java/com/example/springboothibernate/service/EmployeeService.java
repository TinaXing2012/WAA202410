package com.example.springboothibernate.service;


import com.example.springboothibernate.model.Employee;

import java.util.List;

public interface EmployeeService {

    public void addEmplyee(Employee employee);

    public List<Employee> getAllEmployees();
}
