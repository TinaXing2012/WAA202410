package com.example.springdatademo.repository;

import com.example.springdatademo.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeptarmentRepository extends JpaRepository<Department, Integer> {
}
