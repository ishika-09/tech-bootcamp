package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.User;

//@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query (value = "SELECT * FROM user WHERE valid = 0" , nativeQuery = true)
	List<User> findAllPending();
	
	@Query (value = "SELECT * FROM user WHERE valid =1" , nativeQuery = true)
	List<User> findAllValid();
}