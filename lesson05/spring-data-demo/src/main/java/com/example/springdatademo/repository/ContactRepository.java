package com.example.springdatademo.repository;

import com.example.springdatademo.model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

    List<Contact> findByFirstName(String firstName);

    List<Contact> readByFirstName(String firstName);

    List<Contact> findByLastNameIsNot(String lastName);

    //    FirstNameOr(LastNameAndEmail)
//    firstname or lastname, then email
    List<Contact> findByFirstNameOrLastNameAndEmail(String firstName, String lastName, String email);

    List<Contact> findByFirstNameAndEmailOrLastNameAndEmail(String firstName, String email1, String lastName, String email2);
}
