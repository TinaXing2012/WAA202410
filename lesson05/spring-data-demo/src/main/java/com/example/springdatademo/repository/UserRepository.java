package com.example.springdatademo.repository;

import com.example.springdatademo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByDeptName(String name);
    List<User> findByDept_Name(String name);

    //JPQL - query based on object
    @Query("select u from User u where u.firstName = ?1 or u.lastName = ?2")
    List<User> listByNames(String firstname, String lastname);

    @Query("select u from User u where u.firstName = :fname or u.lastName = :lname")
    List<User> listByNames2(@Param(value = "fname") String firstname, String lname);


    @Query(value = "select * from user where first_name = ?1", nativeQuery = true)
    List<User> listByNames3(String fname);

}
