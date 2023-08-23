package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.LoanCardDto;

public interface LoanCardService {
	
	LoanCardDto createLoanCard(LoanCardDto loanCardDto);
	List<LoanCardDto> getAllPendingLoanCards();
	List<LoanCardDto> getAllValidLoanCards();
	List<LoanCardDto> getAllActiveLoanCards(String user_id);
	LoanCardDto findLoanCardById(int id);
	LoanCardDto deleteLoanCardById(int id);
	LoanCardDto updateLoanCard(LoanCardDto loanCardDto);
	void approveLoanCard(LoanCardDto loanCardDto);
}