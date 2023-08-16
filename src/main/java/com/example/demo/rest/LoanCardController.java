package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoanCard;
import com.example.demo.repo.LoanCardRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/loanCards")
public class LoanCardController {
	@Autowired
	private LoanCardRepository loanCardRepository;
	
	@PostMapping
	public LoanCard createLoanCard(@RequestBody LoanCard loanCard) {
		return loanCardRepository.save(loanCard);
	}
}
