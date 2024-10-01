package com.example.springboothibernate.repository;

import com.example.springboothibernate.model.Employee;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public void save(Employee p) {
        Session session = entityManagerFactory.unwrap(SessionFactory.class).openSession();
        Transaction tx = session.beginTransaction();
        session.persist(p);
        tx.commit();
        session.close();
    }


    @Override
    public List<Employee> getAllEmployees() {
        Session session = entityManagerFactory.unwrap(SessionFactory.class).openSession();
        List<Employee> personList = session.createQuery("from Employee").list();
        session.close();
        return personList;

    }
}
