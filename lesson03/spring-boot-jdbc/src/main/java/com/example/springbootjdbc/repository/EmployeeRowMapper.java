package com.example.springbootjdbc.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.springbootjdbc.model.Employee;
import org.springframework.jdbc.core.RowMapper;

public class EmployeeRowMapper implements RowMapper<Employee> {

    @Override
    public Employee mapRow(final ResultSet rs, final int rowNum) throws SQLException {
        final Employee employee = new Employee();

        employee.setId(rs.getInt("id"));
        employee.setFirstName(rs.getString("firstname"));
        employee.setLastName(rs.getString("lastname"));
        employee.setAddress(rs.getString("address"));

        return employee;
    }
}
