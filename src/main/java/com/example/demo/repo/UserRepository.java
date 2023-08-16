package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

//@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}