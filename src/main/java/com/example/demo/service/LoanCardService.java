package com.example.demo.service;

import java.util.Optional;

import com.example.demo.model.LoanCard;

public interface LoanCardService {
	LoanCard createLoanCard(LoanCard loanCard);
	
	Optional<LoanCard> findLoanCardById(int id);
	
	LoanCard updateLoanCard(LoanCard loanCard);
}
