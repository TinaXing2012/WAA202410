package com.example.springbootjdbc.repository;


import com.example.springbootjdbc.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int addEmplyee(int id, String firstname, String lastname, String address) {
        return jdbcTemplate.update("INSERT INTO EMPLOYEE VALUES (?, ?, ?, ?)", id, firstname, lastname, address);
    }

    public List<Employee> getAllEmployees() {
        return jdbcTemplate.query("SELECT * FROM EMPLOYEE", new EmployeeRowMapper());
    }

}
