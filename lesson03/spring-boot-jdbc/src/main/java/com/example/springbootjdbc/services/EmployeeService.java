package com.example.springbootjdbc.services;

import com.example.springbootjdbc.model.Employee;
import com.example.springbootjdbc.repository.EmployeeRowMapper;

import java.util.List;

public interface EmployeeService {

    public int addEmplyee(Employee employee);

    public List<Employee> getAllEmployees();
}
