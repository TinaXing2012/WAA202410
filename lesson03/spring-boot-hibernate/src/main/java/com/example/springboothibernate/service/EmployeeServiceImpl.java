package com.example.springboothibernate.service;


import com.example.springboothibernate.model.Employee;
import com.example.springboothibernate.repository.EmployeeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeDAO employeeDAO;

    @Override
    public void addEmplyee(Employee employee) {
        employeeDAO.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeDAO.getAllEmployees();
    }
}
