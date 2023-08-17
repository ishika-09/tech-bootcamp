package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.LoanCard;
import com.example.demo.repo.LoanCardRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanCardServiceImpl implements LoanCardService {

	private final LoanCardRepository LoanCardRepository;
	@Override
	public LoanCard createLoanCard(LoanCard loanCard) {
		
		return LoanCardRepository.save(loanCard);
	}

	@Override
	public Optional<LoanCard> findLoanCardById(int id) {
		// TODO Auto-generated method stub
		return LoanCardRepository.findById(id);
	}

	@Override
	public LoanCard updateLoanCard(LoanCard loanCard) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Optional<LoanCard> deleteLoanCardById(int id) {
		Optional <LoanCard> o = LoanCardRepository.findById(id);
		LoanCardRepository.deleteById(id);
		return o;
	}
	
	@Override
	public List<LoanCard> getAllLoanCards(){
		List<LoanCard> l=LoanCardRepository.findAll();
		return l;
	}
}
