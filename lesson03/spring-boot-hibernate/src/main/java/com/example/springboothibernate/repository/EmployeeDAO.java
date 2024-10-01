package com.example.springboothibernate.repository;

import com.example.springboothibernate.model.Employee;

import java.util.List;

public interface EmployeeDAO {

    public void save(Employee p);

    public List<Employee> getAllEmployees();

}
