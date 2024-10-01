package com.example.springbootdatademo.repository;

import com.example.springbootdatademo.model.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDAO extends CrudRepository<Employee, Integer> {

}

