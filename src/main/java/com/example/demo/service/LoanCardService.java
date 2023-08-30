package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.ItemDto;
import com.example.demo.dto.LoanCardDto;
import com.example.demo.model.LoanCard;


public interface LoanCardService {
	
	LoanCardDto createLoanCard(LoanCardDto loanCardDto);
	List<LoanCardDto> getAllPendingLoanCards();
	List<LoanCardDto> getAllValidLoanCards();
	List<LoanCardDto> getAllActiveLoanCards(int user_id);
	LoanCardDto findLoanCardById(int id);
	LoanCardDto deleteLoanCardById(int id);
	LoanCardDto updateLoanCard(LoanCardDto loanCardDto);
	void approveLoanCard(LoanCard loanCard);
	List<ItemDto> getAllPurchasedItem(int id);
}