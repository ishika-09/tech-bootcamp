package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.LoanCard;

public interface LoanCardRepository extends JpaRepository<LoanCard, Integer>{

	@Query (value = "SELECT * FROM loancard WHERE valid = 0" , nativeQuery = true)
	List<LoanCard> findAllPending();
	
	@Query (value = "SELECT * FROM loancard WHERE valid = 1" ,nativeQuery = true)
	List<LoanCard> findAllValid();

	@Query (value = "SELECT * FROM loancard WHERE user_id = ?1" ,nativeQuery = true)
	List<LoanCard> findAllActive(int id);

}
