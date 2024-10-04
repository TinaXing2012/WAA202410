package com.example.springdatademo.controller;

import com.example.springdatademo.model.Contact;
import com.example.springdatademo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/contacts")
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact) {
        Contact newContact = contactRepository.save(contact);
        return ResponseEntity.status(201).body(newContact);
    }

    @GetMapping("/contacts/{firstname}")
    public ResponseEntity<List<Contact>> getContact(@PathVariable String firstname) {
        List<Contact> contactList = contactRepository.readByFirstName(firstname);
        if(contactList.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(contactList);
        }
    }

    @GetMapping("/contacts")
    public ResponseEntity<List<Contact>> getAllContacts(@RequestParam(required = false) String firstname,
                                                        @RequestParam(required = false) String lastname,
                                                        @RequestParam(required = false) String email){
        if(lastname != null && firstname != null && email != null) {
            return ResponseEntity.ok(contactRepository.findByFirstNameOrLastNameAndEmail(firstname, lastname, email));
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}
