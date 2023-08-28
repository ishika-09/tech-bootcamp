package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.ItemDto;
import com.example.demo.model.LoanCard;


public interface LoanCardService {
	
	LoanCard createLoanCard(LoanCard loanCard);
	List<LoanCard> getAllPendingLoanCards();
	List<LoanCard> getAllValidLoanCards();
	List<LoanCard> getAllActiveLoanCards(int user_id);
	LoanCard findLoanCardById(int id);
	LoanCard deleteLoanCardById(int id);
	LoanCard updateLoanCard(LoanCard loanCard);
	void approveLoanCard(LoanCard loanCard);
	List<ItemDto> getAllPurchasedItem(int id);
}