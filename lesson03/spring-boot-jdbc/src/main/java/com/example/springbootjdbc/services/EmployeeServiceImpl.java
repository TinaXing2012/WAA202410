package com.example.springbootjdbc.services;

import com.example.springbootjdbc.model.Employee;
import com.example.springbootjdbc.repository.EmployeeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeDAO employeeDAO;

    @Override
    public int addEmplyee(Employee employee) {
        return employeeDAO.addEmplyee(employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getAddress());
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeDAO.getAllEmployees();
    }
}
