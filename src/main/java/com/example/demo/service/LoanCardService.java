package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.LoanCardDto;

public interface LoanCardService {
	
	LoanCardDto createLoanCard(LoanCardDto loanCardDto);
	List<LoanCardDto> getAllLoanCards();
	LoanCardDto findLoanCardById(int id);
	LoanCardDto deleteLoanCardById(int id);
	LoanCardDto updateLoanCard(LoanCardDto loanCardDto);

}