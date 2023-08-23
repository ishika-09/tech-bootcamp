package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.LoanCard;

public interface LoanCardRepository extends JpaRepository<LoanCard, Integer>{

	@Query (value = "SELECT loanCard FROM loancard loanCard WHERE loanCard.valid = 0" , nativeQuery = true)
	List<LoanCard> findAllPending();
	
	@Query (value = "SELECT loanCard FROM loancard loanCard WHERE loanCard.valid = 1" ,nativeQuery = true)
	List<LoanCard> findAllValid();

	@Query (value = "SELECT loanCard FROM loancard loanCard WHERE loanCard.user_id = ?1" ,nativeQuery = true)
	List<LoanCard> findAllActive(String user_id);

}
