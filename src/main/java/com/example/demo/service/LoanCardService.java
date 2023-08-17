package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.LoanCard;

public interface LoanCardService {
	LoanCard createLoanCard(LoanCard loanCard);
	
	Optional<LoanCard> findLoanCardById(int id);
	Optional<LoanCard> deleteLoanCardById(int id);
	List<LoanCard> getAllLoanCards();
	LoanCard updateLoanCard(LoanCard loanCard);
}
