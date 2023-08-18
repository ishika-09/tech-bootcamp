package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import com.example.demo.model.LoanCard;
import com.example.demo.repo.LoanCardRepository;
import com.example.demo.dto.AdminDto;
import com.example.demo.dto.LoanCardDto;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanCardServiceImpl implements LoanCardService {

	private final LoanCardRepository loanCardRepository;
	private final ModelMapper modelMapper;
	@Override
	public LoanCardDto createLoanCard(LoanCardDto loanCardDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		LoanCard loanCard = modelMapper.map(loanCardDto, LoanCard.class);
		LoanCard loanCard2= loanCardRepository.save(loanCard);
		
		return modelMapper.map(loanCard2, LoanCardDto.class);
	}

	@Override
	public LoanCardDto findLoanCardById(int id) {
		// TODO Auto-generated method stub
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional<LoanCard> loanCard = loanCardRepository.findById(id);
		
		return modelMapper.map(loanCard, LoanCardDto.class);
	}

	@Override
	public LoanCardDto updateLoanCard(LoanCardDto loanCardDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoanCardDto deleteLoanCardById(int id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <LoanCard> loanCard = loanCardRepository.findById(id);
		loanCardRepository.deleteById(id);
		return modelMapper.map(loanCard, LoanCardDto.class);
	}
	
	@Override
	public List<LoanCardDto> getAllLoanCards(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<LoanCard> loanCard = loanCardRepository.findAll();
		List<LoanCardDto> l = modelMapper.map(loanCard, new TypeToken<List<LoanCardDto>>(){}.getType());
		return l;
	}
}
